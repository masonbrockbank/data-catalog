import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Table2 from './components/Table2'
import './App.css';
import Spinner from "./components/Spinner"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {

  const [key, setKey] = useState({})
  const [datasetIds, setDatasetIds] = useState([])
  const [schemaAnalysis, setSchemaAnalysis] = useState([])
  const [isLoading, setLoading] = useState(true);

  const url = 'https://api.domo.com/oauth/token?grant_type=client_credentials';
  const datasetUrl = 'https://api.domo.com/v1/datasets';

 

  useEffect(() => {
    // declare the async data fetching function

    const fetchAccesstoken = async () => {
      const headers = {
        "Accept": "application/json",
        "Authorization": `Basic ${process.env.REACT_APP_AUTH}`
      }

      const response = await fetch(url, { headers })
      const json = await response.json();
      setKey(json.access_token);
      fetchDatasets(json.access_token)

    }

    // call the function
    fetchAccesstoken()

    // make sure to catch any error
  }, [])


  const fetchDatasets = async (auth) => {
    const options = {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${auth}` }
    };

    const response = await fetch(datasetUrl, options)
    const results = await response.json();
    fetchDataSchema(results, auth)

    setDatasetIds(results)

  }


 
  const fetchDataSchema = async (results, auth) => {

    const schemaUrl = 'https://api.domo.com/v1/datasets';
    const options = {
      method: 'GET',
      headers: { Accept: 'application/json, application/xml', Authorization: `Bearer ${auth}` }
    };

    for (let i = 0; i < results.length; i++) {
      try {
        const response = await fetch(`${schemaUrl}/${results[i].id}`, options);
        const data = await response.json();

        for(let j = 0; j < data.schema.columns.length; j++){
          schemaAnalysis.push({datasetId: data.id, datasetName: data.name, columnName: data.schema.columns[j].name})
        }
        
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false)  
  }






    return (
      <div className="">
        { !isLoading ? 
        <Table2 schemaAnalysis={schemaAnalysis} />
            : 
        <Spinner />
        }
      </div>
    );
}

export default App;

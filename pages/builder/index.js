import Builder from '@/components/Builder';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BuilderPage() {
  const [bearer, setBearer] = useState();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const a = await axios.get('/api/accessToken');
      setBearer(a.data);
      save(a.data)
    }
    catch (err) {
      console.log(err)
    }
  }


  const save = async (bearer) => {
    try {
      const a = await axios.get('/api/pavia/getSavedMechs');
      console.log(a.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <Builder bearer={bearer} />
  )
}
BuilderPage.DisplayName = 'Builder';

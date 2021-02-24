import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import {useMediaQuery} from 'react-responsive/src/index';

import { tabs, row } from '../../constains'
import Title from '../../components/Title';
import Tabs from '../../components/Tabs';
import Table from '../../components/Table';
import Pen from '../../components/Pen';

const Questions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [sortedRow, setSortedRow] = useState([]);
  const [rowData, setRowData] = useState(JSON.parse(localStorage.getItem('list')) || row);
  const history = useHistory();
  const isMobile = useMediaQuery({
    maxWidth: 1080
  });

  useEffect(() => {
    switch(activeTab) {
      case 1: {
        return setSortedRow([...rowData].sort((a, b) => {
          if (a.answersCount < b.answersCount) {
          return 1;
        }
        if (a.answersCount > b.answersCount) {
          return -1;
        }
        return 0;
      }));
      }
      case 2: {
        return setSortedRow(rowData.filter(i => i.isStar))
      }
      default: {
        return setSortedRow(rowData)
      }
    }
  }, [activeTab, rowData]);

  const onStar = (id) => {
    const result = rowData.map(i => i.id === id ? {...i, isStar: !i.isStar} : i);

    setRowData(result);
    localStorage.setItem('list', JSON.stringify(result));
  };

  return (
    <>
      <Title
        text={'Comunidad Luca'}
        btnText={'Nueva Pregunta'}
        hiddeBtn={isMobile}
        btnOnClick={() => history.push('/comunidad/new')}
      />
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        handleChangeTab={(i) => setActiveTab(i)}
      />
      <Table
        row={sortedRow}
        onStar={onStar}
      />
      {isMobile && <Pen onClick={() => history.push('/comunidad/new')}/>}
    </>)
};

export default Questions;
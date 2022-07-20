import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import { oneMonth, oneYear } from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFaceMeh, faFaceFrown } from '@fortawesome/free-solid-svg-icons';

export const LowerImpactPurchases = () => {
  return (
    <div className='lower-impact-purchases'>
      <h1>Lower Impact Purchases</h1>
      <p>There are 9 lower impact companies in the past month and 10 lower impact companies in the past 12 months.</p>
      <div>
        {oneMonth.map((company) => (
          <EachCompany {...company} key={company.id} />
        ))}
      </div>
      <div>
        {oneYear.map((company) => (
          <EachCompany {...company} key={company.id} />
        ))}
      </div>
    </div>
  )
}


export const EachCompany = (props) => {
  const [neutral] = useState('');

  function handleWebsiteClick (e) {
    e.preventDefault();
    console.log('you found the click');
  }
  return (
    <>
      <div className="all-info">
        <div>
          {props.company.rating === [neutral] ? (
          <FontAwesomeIcon icon={faFaceMeh} style={{color: '#FDDA0D', height: '40px'}} /> 
          ) : (
          <FontAwesomeIcon icon={faFaceFrown} style={{color: '#FDDA0D', height: '40px'}} /> 
          )}
        </div>
        <p>{props.company.companyName}</p>
        <p>${props.totalSpent.toFixed(2)}</p>
        <a component={Link} href={props.company.url}><button onClick={handleWebsiteClick}>{'>'}</button></a>
      </div>
      <div>
        <hr style={{ background: 'gray', color: 'gray', borderColor: 'gray', height: '1px', width: '90%' }} />
      </div></>
  )
}


// need to do conditional rendering with rating faces
// if neutral, use neutral face. if negative, use negative face.
// need to add tabs
// when you click the arrow, takes you to company website

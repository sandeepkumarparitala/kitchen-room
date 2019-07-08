import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    
  DetailsItem,
  Card,
  Count,
  Text
} from './styles'
 
export const RenderDetails = () => {
    const details = [
      {
        label:'recomended',
        text:'recomended jobs',
        path: 'recomended-jobs',
        count: 10,
      },
      {
        label:'attendad',
        text:'interviews attended',
        path:'interviews-attended',
        count:2
      },
      {
        label:'shortlisted',
        path:'companies-shortlisted',
        text:'companies shortlisted',
        count:5
      },
      {
        label:'placed',
        text:'companies offered',
        path:'companies-offered',
        count:0
      }
    ]
    return details.map((item)=>(
      <DetailsItem>
        <Link to={`/jobs/${item.path}`} >
        <Card>
        <Count>{item.count}</Count>
        <Text>{item.text}</Text>
        </Card>
        </Link>
      </DetailsItem>
    ))
  }
"use client";

import { GridColDef, GridColumnVisibilityModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import StripedDataGrid from '@/components/StripedDataGrid';
import Grid from '@mui/material/Unstable_Grid2';

const workColumns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 20 },
  { field: 'date', headerName: 'Date', width: 100, sortComparator: (v1: any, v2: any) => {
    const firstDate1: string = v1[0].split('-')[0];
    const firstDate2: string = v2[0].split('-')[0];
    return firstDate1.localeCompare(firstDate2);
  }, renderCell: (params) => (
    <div>
      {params?.value.map((date, index) => (
        <Typography key={index} color="textSecondary">
          {date}
        </Typography>
      ))}
    </div>
  ) },
  { field: 'position', headerName: 'Position', width: 250 },
  { field: 'company', headerName: 'Company', flex: 2, sortComparator: (v1: any, v2: any) => {
    return v1[0].localeCompare(v2[0]);
  }, renderCell: (params) => (
    <div>
      {params?.value.map((company, index) => (
        <Typography key={index} color="textSecondary">
          {company}
        </Typography>
      ))}
    </div>
  ) },
  { field: 'location', headerName: 'Location', width: 200 },
  {
    field: 'details', headerName: 'Details', flex: 5, sortComparator: (v1: any, v2: any) => {
      return v1[0].localeCompare(v2[0]);
    }, renderCell: (params) => (
      <div>
        {params?.value.map((detail, index) => (
          <Typography key={index} color="textSecondary">
            * {detail}
          </Typography>
        ))}
      </div>
    )
  },
];

const workRows = [
  {
    id: 1, 
    date: ['2021/05 -',  '2023/04'],
    position: 'Senior Softwareentwickler',
    company: ['Vattenfall Energy Trading GmbH'],
    location: 'Hamburg',
    details: [
      'Fullstack: backend, frontend, E2E testing, 24/7 support and DevOps',
      'New development: Scrum, Full Stack, C#, Asp.net 5 + 6, Azure and Kubernetes',
      'Further developments: Scrum, Full Stack, C#, Asp.net 4.7, Azure VM and Appservice',
    ]  },
  {
    id: 2, 
    date: ['2021/01 -',  '2021/04'],
    position: 'Senior Backendentwickler',
    company: ['Hellmann Worldwide Logistics SE & Co. KG'],
    location: 'Osnabrück',
    details: [
      'Development with Scrum',
      'New development with Asp .Net Core, REST, Kubernetes and RabbitMQ',
    ]  },
  {
    id: 3, 
    date: ['2019/09 -',  '2020/09'],
    position: 'Senior Associate',
    company: ['PricewaterhouseCoopers GmbH', 'Wirtschaftsprüfungsgesellschaft'],
    location: 'Hamburg and Hannover',
    details: [
      'Development with Kanban',
      'Fullstack: backend, frontend, E2E testing, support and DevOps',
      '1 year further development: Javascript, Asp .Net 4.6 MVC, .Net Core 2+3, Docker, Selenium and Azure',
    ]  },
  {
    id: 4, 
    date: ['2019/03 -',  '2019/08'],
    position: 'Senior Softwareentwickler',
    company: ['KPMG IT Service GmbH'],
    location: 'Hamburg and Berlin',
    details: [
      'Development with Scrum',
      'New development: .Net Core, Angular, Typescript, RabbitMQ, Microservices and Azure Service Fabric',
    ]  },
  {
    id: 5, 
    date: ['2017/12 -',  '2019/01'],
    position: 'Softwarearchitekt',
    company: ['Dataport AöR'],
    location: 'Hamburg',
    details: [
      'Development with Scrum',
      'Participation in architecture jour fixes',
      'approx. 1 month as Scrum Master',
      'approx. 1 year development of online services for Hamburg: Asp .Net 4.6.2 MVC, HTML5, JS and Bootstrap',
    ]  },
  {
    id: 6, 
    date: ['2011/01 -',  '2017/08'],
    position: 'Software Engineer',
    company: ['Crane Payment Innovations GmbH'],
    location: 'Buxtehude',
    details: [
      'Development with Kanban and Scrum',
      'approx. 4 years web development with C#, Asp.net, Java, Angular, HTML and Javascript',
      'approx. 4 years algo development with Matlab, Python, C#, C++ and Qt',
      'approx. 3 years desktop application development with C++, Qt and C#',
      'approx. 0.5 years embedded software development on microcontrollers with CC',
      'Supervision of interns',
    ]
  },
  {
    id: 7, 
    date: ['2010/04 -',  '2010/08'],
    position: 'Internship R&D',
    company: ['Dräger Medical AG & Co. KG'],
    location: 'Lübeck',
    details: [
      'Development with Extreme Programming',
      'XML Transformations with XSLT',
      'Development of automated test sequences in C++ and NI Teststand',
      'Creation of DLLs to control actuators and sensors in C++',
    ]  },
  {
    id: 8, 
    date: ['2008/03 -',  '2010/03'],
    position: 'Student employee', 
    company: ['University of Applied Sciences Hamburg'],
    location: 'Hamburg',
    details: [
      'Supervision and monitoring of laboratory experiments',
    ]  },
];

const educationColumns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 20 },
  { field: 'date', headerName: 'Date', width: 100, sortComparator: (v1: any, v2: any) => {
    const firstDate1: string = v1[0].split('-')[0];
    const firstDate2: string = v2[0].split('-')[0];
    return firstDate1.localeCompare(firstDate2);
  }, renderCell: (params) => (
    <div>
      {params?.value.map((date, index) => (
        <Typography key={index} color="textSecondary">
          {date}
        </Typography>
      ))}
    </div>
  ) },
  { field: 'education', headerName: 'Education', width: 250, sortComparator: (v1: any, v2: any) => {
    return v1[0].localeCompare(v2[0]);
  }, renderCell: (params) => (
    <div>
      {params?.value.map((education, index) => (
        <Typography key={index} color="textSecondary">
          {education}
        </Typography>
      ))}
    </div>
  )},
  { field: 'institution', headerName: 'Institution', flex: 2  },
  { field: 'location', headerName: 'Location', width: 200 },
  {
    field: 'details', headerName: 'Details', flex: 5, sortComparator: (v1: any, v2: any) => {
      return v1[0].localeCompare(v2[0]);
    }, renderCell: (params) => (
      <div>
        {params?.value.map((detail, index) => (
          <Typography key={index} color="textSecondary">
            * {detail}
          </Typography>
        ))}
      </div>
    )
  },
];

const educationRows = [
  {
    id: 1, 
    date: ['2006/09 -',  '2010/08'],
    education: ['Bachelor of Computer Sciences'],
    institution: 'University of Applied Sciences Hamburg',
    location: 'Hamburg',
    details: ['Favorite modules: Algorithms, Distributed Systems and Software Engineering',
      'Elective modules: Hardware Software Codesign and Robot Vision',
      'Thesis: Modeling of a parking assistant for an autonomous vehicle implemented on an SoC platform',
      'Overall grade 1.4']
  },
  {
    id: 2,
    date: ['2005/08 -',  '2006/07'],
    education: ['University entrance qualification', 'electrical engineering'],
    institution: 'Vocational school Winsen',
    location: 'Winsen (Luhe)',
    details: ['Elective course in computer science', 'Overall grade 2.3']
  },
  {
    id: 3,
    date: ['2003/08 -',  '2005/07'],
    education: ['Apprenticeship as a', 'technical drawer', '* electrical engineering', '* mechanical engineering', '* civil engineering'],
    institution: 'Vocational school for metal technology G17',
    location: 'Hamburg',
    details: ['Overall grade 2.8']
  },
];
export default function CvPage() {
  const [columnVisibilityModel] = useState<GridColumnVisibilityModel>({
    id: false,
    order: false,
  });

  const getRowHeight = (params) => {
    let maxHeight = 50 * 2;
    if (params && params.model && params.model.details) {
      // Adjust the base row height here
      let baseHeight = 50 * 2;

      // Calculate height based on details content
      const detailsRowCount = params.model.details.length;
      const detailsHeight = detailsRowCount * 20; // Change 20 to the desired height per detail item

      maxHeight =  baseHeight + detailsHeight;
    }
    if (params && params.model && params.model.education) {
      // Adjust the base row height here
      let baseHeight = 50 * 2;

      // Calculate height based on details content
      const eductionRowCount = params.model.education.length;
      const eductionHeight = eductionRowCount * 8;

      let maxHeightEducation =  baseHeight + eductionHeight;
      if(maxHeightEducation > maxHeight)  {
        maxHeight = maxHeightEducation;
      }
    }
    if (params && params.model && params.model.company) {
      // Adjust the base row height here
      let baseHeight = 50 * 2;

      // Calculate height based on details content
      const companyRowCount = params.model.company.length;
      const companyHeight = companyRowCount * 8;

      let maxHeightCompany =  baseHeight + companyHeight;
      if(maxHeightCompany > maxHeight)  {
        maxHeight = maxHeightCompany;
      }
    }
    return maxHeight; // Default height
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>

      <Grid container spacing={3} sx={{ flexGrow: 1, mb: '0', pb: '0' }} >
        <Grid xs={8} md={8} lg={8} xl={8}>
          <h2>About me</h2>
          <Typography whiteSpace="pre-line">
            As a software developer who is passionate about new technologies,
            I am always looking for ways to learn and grow.
            I am constantly reading about the latest trends and developments,
            and I am always eager to try new things.
            I am also often very creative and innovative,
            and I am always looking for ways to improve the way software is developed.
          </Typography>
        </Grid>
        <Grid xs md lg sm xl />
        <Grid>
          <img src="/TAlpers.png" alt="Logo" width="180" style={{ marginBottom: '0', paddingBottom: '0' }} />  </Grid>
      </Grid>

      <Box sx={{ mt: '0', pt: '0' }}>
        <h2 style={{ marginTop: '0', paddingTop: '0' }}>Professional Experience</h2>
        <StripedDataGrid
          rows={workRows}
          columns={workColumns}
          initialState={{
            columns: {
              columnVisibilityModel,
            },
          }}
          pageSizeOptions={[5, 10]}
          hideFooter={true}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          getRowHeight={getRowHeight}
          />
      </Box>
      <Box pt={2}>
        <h2 >Education</h2>
        <StripedDataGrid
          rows={educationRows}
          columns={educationColumns}
          initialState={{
            columns: {
              columnVisibilityModel,
            },
          }}
          pageSizeOptions={[5, 10]}
          hideFooter={true}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          getRowHeight={getRowHeight}
        />
      </Box>
    </div>
  );
}
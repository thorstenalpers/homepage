import { CvEducationDataType } from "./cvEducationData.type";

const cvEducationDataArray: CvEducationDataType[] = [
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
export default cvEducationDataArray;

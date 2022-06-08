import React from 'react';

const Main = () => {

  const a : string = 'hello';

  const name : string = '이경태';
  const age : number = 23;
  const song : { songname : string, sing : string}  = { songname : 'abab', sing : 'gfgf' }

  let project : {
    member : string[], 
    days : number, 
    started : boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

  const 회원들 : (number | string)[] = [1, '2', 3]

  const ehe : number = 3
  const bv : number = 2

  return (
    <div>
      {project.member}
      {회원들}
    </div>
  );
};

export default Main;
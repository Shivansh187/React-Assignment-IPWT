import React from 'react';

const Resume1 = () => {
  return (
    <>
    <div className="my-5">
      <h1 className="text-center"><u>React JS: Making Resume</u></h1>
    </div>
    <div className="container-fluid nav_bg" >
          <div className="row">
            <div className="col-10 mx-auto">
              <h1>SHIVANSH CHADHA</h1>
              <img src="https://assets.website-files.com/5bff8886c3964a992e90d465/5c00fa0eb8b0816e1a10dfe6_hero-2.svg" alt="me"/>
              <h2>About Me</h2>
              <table>
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Course</th>
                  </tr>
                  <tr>
                      <td>Shivansh Chadha</td>
                      <td>19</td>
                      <td>CSE + IOT</td>
                  </tr>
              </table>
              <br /><br />
              <h2>Hobbies</h2>
              <ul>
                  <li>Swimming</li>
                  <li>Reading</li>
                      <ol>
                          <li>Fiction</li>
                          <li>Manga</li>
                      </ol>
                  <li>Football</li>
              </ul>
              <br />
              <h2>Education</h2>
              <p>Hi I am a second year student pursuing BTech. I am studying Computer Science and Engineering with specialisation in Internet of Things</p>
              <button><a href="https://github.com/Shivansh187">GITHUB</a></button>
            </div>
        </div>
      </div>
      </>
  );
}

export default Resume1;

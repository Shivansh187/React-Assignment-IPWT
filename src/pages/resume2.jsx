import React from 'react';
import '../css/resume2.css'

const Resume2 = () => {
  return (
    <>
    <div className="my-5">
      <h1 className="text-center"><u>React JS: Resume using Tables</u></h1>
    </div>
    <div className="container-fluid nav_bg" >
          <div className="row">
            <div className="col-10 mx-auto">
              <h3>Form without Table</h3>
              <form>
                  <label>Name</label>
                  <input type="text" placeholder="Enter Name"/>
                  <br />
                  <label>Age</label>
                  <input type="number" placeholder="Enter Age"/>
                  <br />
                  <label>Email</label>
                  <input type="email" placeholder="Enter Email"/>
                  <br />
                  <label>Qualification</label>
                  <input type="text" placeholder="Enter Qualification"/>
                  <br />
                  <label>Date of Birth</label>
                  <input type="date" placeholder="Enter DOB"/>
                  <br />
                  <label>Phone</label>
                  <input type="number" placeholder="Enter Phone"/>
                  <br />
                  <label>Password</label>
                  <input type="password" placeholder="Enter Password"/>
              </form>

              <br />

              <h3>Form with Table</h3>
              <form >
                  <table>
                      <tr>
                          <th><label>Name</label></th>
                          <td><input type="text" placeholder="Enter Name"/></td>
                      </tr>
                      <tr>
                          <th><label>Age</label></th>
                          <td><input type="number" placeholder="Enter Age"/></td>
                      </tr>
                      <tr>
                          <th><label>Email</label></th>
                          <td><input type="email" placeholder="Enter Email"/></td>
                      </tr>
                      <tr>
                          <th><label>Qualification</label></th>
                          <td><input type="text" placeholder="Enter Qualification"/></td>
                      </tr>
                      <tr>
                          <th><label>Date of Birth</label></th>
                          <td><input type="date" placeholder="Enter DOB"/></td>
                      </tr>
                      <tr>
                          <th><label>Phone Number</label></th>
                          <td><input type="number" placeholder="Enter Contact"/></td>
                      </tr>
                      <tr>
                          <th><label>Password</label></th>
                          <td><input type="password" placeholder="Enter Password"/></td>
                      </tr>
                  </table>
              </form>
              <br /> <br />

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

export default Resume2;

import "./ContactUs.css";
import Navbar from "./component/Navbar";


function Contact () {
    return(
        <div className="dashboard">
            <Navbar />
            <div className="tab-2 contact-tab">
                <h1>Find below a contact list for all the course instructors for the courses you have taken</h1>
                <table>
                    <thead>
                    <tr>
                        <th className="courses">Course</th>
                        <th className="exams-score">Instructor</th>
                        <th className="grades">Contact</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="courses">Critical Thinking and Practical Reasoning</td>
                        <td className="exams-score">Dr. Nancy Miles</td>
                        <td className="grades">nmiles@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Academic Writing</td>
                        <td className="exams-score">Kim Jung Un</td>
                        <td className="grades">example@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Programming</td>
                        <td className="exams-score">Kim Tae Hyung</td>
                        <td className="grades">kim@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Algebra and Trigonometry</td>
                        <td className="exams-score">J Hope</td>
                        <td className="grades">jhope@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Introduction to Statistics and Probability</td>
                        <td className="exams-score">Jung Kook</td>
                        <td className="grades">kookoie@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Calculus</td>
                        <td className="exams-score">Robert Downey</td>
                        <td className="grades">rodee@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Office Productivity Tools</td>
                        <td className="exams-score">Kofi K</td>
                        <td className="grades">kf200@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Introduction to Computer Science</td>
                        <td className="exams-score">James May</td>
                        <td className="grades">prof@yahoo.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Vectors and Geometry</td>
                        <td className="exams-score">Clark Kent</td>
                        <td className="grades">gosh@yahoo.com</td>
                    </tr>
                    <tr>
                        <td className="courses">Introduction to Statistics and Probability II</td>
                        <td className="exams-score">Allen Brown</td>
                        <td className="grades">yeah@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
           
        </div>
    );


}

export default Contact;
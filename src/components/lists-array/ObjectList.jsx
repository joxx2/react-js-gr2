import React from "react";

function ObjectList() {
    const students = [
        { id: 1, firstName: 'jon', lastName: 'hajredinaj' },
        { id: 2, firstName: 'maria', lastName: 'hajredinaj' },
        { id: 3, firstName: 'lisa', lastName: 'hajredinaj' },
    ];
    const [show, setShow] = React.useState(true);
    const [isLineThrough, setLineThrough] = React.useState(false);
    console.log(students);
    const handleLineTrought = () => {
        setLineThrough(!isLineThrough);
    }
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'} Students
            </button>
            <ul>
                {show &&
                    students.map((student) => (
                        <li
                            style={{ textDecoration: isLineThrough ? "line-through" : "none" }}
                            onClick={handleLineTrought}
                            key={student.id}>{student.firstName} {student.lastName}</li>

                    ))
                }
            </ul>
        </div>
    )



}


export default ObjectList
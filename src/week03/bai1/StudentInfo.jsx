import './StudentInfo.css'

function StudentInfo({ name, mssv, className }) {
    return (
        <div className="student-card">
            <div className="avatar">
                <span>👩‍🎓</span>
            </div>

            <h2>{name}</h2>

            <p><strong>MSSV:</strong> {mssv}</p>
            <p><strong>Lớp:</strong> {className}</p>
        </div>
    )
}

export default StudentInfo


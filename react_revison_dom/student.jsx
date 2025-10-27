const parent=document.getElementById('parent');
console.log(parent);
const root=ReactDOM.createRoot(parent);


const student=<h2 style={{textAlign:"center"}}>DATA OF STUDENT</h2>
const id=<p>id:2023B1531004</p>
const name=<p>name:ISHAN</p>
const branch=<p>branch:CSE-AIML</p>
const college=<p>college:ABESEC</p>

const wrapper=(
    <div style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        border:"2px solid black",
        width:"300px",
        margin:"20px auto",
        padding:"20px"
        
    }}>
    {student}
    {id}
    {name}
    {branch}
    {college}
    </div>
);

root.render(wrapper);
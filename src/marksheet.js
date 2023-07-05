import './Components/mark.css'



function StudentMark (props){
return(
    <div >
        <div className="map">
        {
        props.marks.map((em)=>
        <ul>

<li>{em.sub} is {em.m}</li>

        </ul>
        
        )
    }
        </div>
       
    </div>

)
}







export default StudentMark ;
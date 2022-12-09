import EmployF from './EmployF'
let EmployC = () => {

    let eid = 101;
    let ename = "Rahul Gandhi";
    


    return <div>
        <h2>Employee C</h2>
        <hr />
        <EmployF id={eid} name={ename} />
    </div>
}

export default EmployC;
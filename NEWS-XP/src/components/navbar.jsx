

const navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"beige"}}>
      <div className="container-fluid">
        




       
        <a class="fancy" >
          <span class="top-key">NEWS-XP</span>
  
  <span class="text"></span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>





    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")} >technology</div>
        </li>
       <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>business</div>
            </li>
            <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>health</div>
            </li>
            <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}>science</div>
            </li>
            <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>sports</div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default navbar

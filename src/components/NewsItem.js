import React from 'react'

const NewsItem = (props) => {

 

    let {title ,description,imageUrl,newsUrl,author, date ,source} = props;

    return (
      <div className='my-3'>
        
        <div className="card" style={{width: "18rem"}}>

          <div>

          <span className=" position-absolute top-0 
           translate-middle badge rounded-pill bg-info " style={{left:"90%",zIndex:"1"}}> {source} </span>


          </div>
          
       
        <img src={!imageUrl?"https://static.tnn.in/thumb/msid-93869728,imgsize-100,width-1280,height-720,resizemode-75/93869728.jpg":imageUrl} className="card-img-top" alt="img"/>
        <div className="card-body">
            <h5 className="card-title">{title} <span className="badge badge-warning">Warning</span></h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author? "unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>

      </div>
    )
 
}



// export class NewsItem extends Component {



//   render() {

//     let {title ,description,imageUrl,newsUrl,author, date ,source} = this.props;

//     return (
//       <div className='my-3'>
        
//         <div className="card" style={{width: "18rem"}}>

//           <div>

//           <span className=" position-absolute top-0 
//            translate-middle badge rounded-pill bg-info " style={{left:"90%",zIndex:"1"}}> {source} </span>


//           </div>
          
       
//         <img src={!imageUrl?"https://static.tnn.in/thumb/msid-93869728,imgsize-100,width-1280,height-720,resizemode-75/93869728.jpg":imageUrl} className="card-img-top" alt="img"/>
//         <div className="card-body">
//             <h5 className="card-title">{title} <span class="badge badge-warning">Warning</span></h5>
//             <p className="card-text">{description}...</p>
//             <p className='card-text'><small className='text-muted'>By {!author? "unknown":author} on {new Date(date).toGMTString()}</small></p>
//             <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
//         </div>
//         </div>

//       </div>
//     )
//   }
// }

export default NewsItem
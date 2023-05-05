import React from 'react'

const carousel = () => {
  return (
//   <div id="carouselExampleFade" class="carousel slide carousel-fade">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="./image/1.png" class="d-block w-100" alt="..." width="1100" height="450"/>
//     </div>
//     <div class="carousel-item">
//       <img src="./image/4.png" class="d-block w-100" alt="..." width="1100" height="450"/>
//     </div>
//     <div class="carousel-item">
//       <img src="./image/2.jpg" class="d-block w-100" alt="..." width="1100" height="450"/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
  
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <img src="./image/1.png" class="d-block w-100" alt="..." width="1100" height="450"/>
    </div>
    <div class="carousel-item">
    <img src="./image/4.png" class="d-block w-100" alt="..." width="1100" height="450"/>
    </div>
    <div class="carousel-item">
    <img src="./image/2.jpg" class="d-block w-100" alt="..." width="1100" height="450"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default carousel
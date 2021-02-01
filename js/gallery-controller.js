'use strict';


$(document).ready(init);


function init() {
    console.log('Starting up');
    renderProjects()
}

function renderProjects() {
    var projects = getProjects()
    var strHTML = projects.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal(${proj.id})">
               <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
                   <div class="portfolio-hover">
                       <div class="portfolio-hover-content">
                           <i class="fa fa-plus fa-3x"></i>
                       </div>
                   </div>
                   <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
               </a>
               <div class="portfolio-caption">
                   <h4>${proj.name}</h4> 
                   <p class="text-muted">${proj.title}</p>
               </div>
           </div>`
    }).join('')
    $('.my-projects').html(strHTML);

}

function renderModal(projIdx) {
    var proj = getProjById(projIdx)
    var strHTML =
        `<div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                       <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <h2>${proj.name}</h2>
                                <p class="item-intro text-muted">${proj.title}</p>
                                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
                                <p>${proj.desc}</p>
                                <ul class="list-inline">
                                    <li>Date: ${proj.publishedAt}</li>
                                    <li><a href="${proj.url}" target="_blank">${proj.name}</a></li>
                                    <li>Category:${proj.labels}</li>
                                </ul>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>
                                Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

    $('#portfolioModal').html(strHTML)
}

import React from "react";

const navbar =()=>{
    return(
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png" height="250px" width="250px"/>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   
                     </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Menu item</a></li>
                            <li><a class="dropdown-item" href="#">Menu item</a></li>
                            <li><a class="dropdown-item" href="#">Menu item</a></li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}
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
                        Favorites
   
                     </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            
                            
                        </ul>
                </div>
            </nav>
        </div>
    )
}
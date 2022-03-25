import React, { useEffect, useState } from 'react';
import { listData } from './List';
import _ from "lodash"; //s5

const pageSize = 6; //s2

function Home() {
    const [paginatedPosts, setPaginatedPosts] = useState(listData); //s8
    const [currentPage, setCurrentPage] = useState(1); //s11

    const [list, setList] = useState(true);
    const [grid, setGrid] = useState(false);

    useEffect(() => {
        const data = listData
        console.log("listdata", data);
        setPaginatedPosts(_(listData).slice(0).take(pageSize).value()); //s9
    }, [])

    const pageCount = listData ? Math.ceil(listData.length / pageSize) : 0; //s3// it multiple the page by pagesize
    if (pageCount === 1) return null; //s4
    const pages = _.range(1, pageCount + 1) //s6 //so we get pagcount 1 to 20.

    const pagination = (pageNo) => { //s13
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPosts = _(listData).slice(startIndex).take(pageSize).value();
        setPaginatedPosts(paginatedPosts)
    }

    const listView = () => {
        setList(true);
        setGrid(false);
    }
    const gridView = () => {
        setGrid(true);
        setList(false);
    }

    return (
        <div >
            <div className="button_holder my-4">
                <div>
                    <button className="btn btn-info" onClick={() => { listView() }}>List View</button>
                </div>
                <div>
                    <button className="btn btn-warning" onClick={() => { gridView() }}>Grid View</button>
                </div>
            </div>
            <div className="row p-2">
                {list === true || grid === false ?
                    paginatedPosts.map((item, key) => { //s10 change listData to paginatedpost
                        return (
                            <div class="p-2" style={{border: '2px solid ',marginBottom:"8px", borderRadius:'6px' }}>
                                <tr key={key}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.company}</td>
                                    <td>{item.product}</td>
                                    <td>{item.image}</td>
                                </tr>
                            </div>
                        )
                    }) : paginatedPosts.map((item, key) => {
                        return (
                            <div class="column" style={{ width: "18rem", border:"2px solid"}} key={key}>
                                {item.image}
                                <div class="card-body">
                                    <h5 class="card-title">{item.company}</h5>
                                    <p class="card-text">{item.product}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )
                    })
                }


                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        { //s7
                            pages.map((page) => (
                                <li class={
                                    page === currentPage ? "page-item active" : "page-item"
                                }><a class="page-link" onClick={() => pagination(page)} href="#">{page}</a></li> //s12
                            ))
                        }

                        {/* <li class="page-item"><a class="page-link" href="#">Previous</a></li> //s1
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Home;
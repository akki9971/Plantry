import React from 'react'
import { SectionBox, ZoomedImage } from '../../Shared'

export const International = () => {
    return (
        <>
            <style jsx>{`
                /* width */
                ::-webkit-scrollbar {
                width: 5px;
                height: 3px;
                }

                /* Track */
                ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px #009740; 
                border-radius: 10px;
                }
                
                /* Handle */
                ::-webkit-scrollbar-thumb {
                background: #009740; 
                border-radius: 10px;
                }

                /* Handle on hover */
                // ::-webkit-scrollbar-thumb:hover {
                // background: #b30000; 
                // }
            `}</style>
            <SectionBox>
                <div className="title">
                    <h2>International</h2>
                </div>
                <div className="row scrollable">
                    <div className="col mt-2 mx-sm-0">
                        <a href="" className="td-none">
                            <ZoomedImage src="Images/country/country.jpg" rounded={true} width="80px" height="80px" border={true} />
                            <h6 className="c-name">
                                USA
                            </h6>
                        </a>
                    </div>
                    <div className="col mt-2 mx-sm-0">
                        <a href="" className="td-none">
                            <ZoomedImage src="Images/country/country.jpg" rounded={true} width="80px" height="80px" border={true} />
                            <h6 className="c-name">
                                Singapore
                            </h6>
                        </a>
                    </div>
                    <div className="col mt-2 mx-sm-0">
                        <a href="" className="td-none">
                            <ZoomedImage src="Images/country/country.jpg" rounded={true} width="80px" height="80px" border={true} />
                            <h6 className="c-name">
                                UAE
                            </h6>
                        </a>
                    </div>
                    <div className="col mt-2 mx-sm-0">
                        <a href="" className="td-none">
                            <ZoomedImage src="Images/country/country.jpg" rounded={true} width="80px" height="80px" border={true} />
                            <h6 className="c-name">
                                UK
                            </h6>
                        </a>
                    </div>
                    <div className="col mt-2 mx-sm-0">
                        <a href="" className="td-none">
                            <ZoomedImage src="Images/country/country.jpg" rounded={true} width="80px" height="80px" border={true} />
                            <h6 className="c-name">
                                Qatar
                            </h6>
                        </a>
                    </div>
                    <div className="col mt-2 mx-sm-0">
                        <a href="" className="td-none">
                            <ZoomedImage src="Images/country/country.jpg" rounded={true} width="80px" height="80px" border={true} />
                            <h6 className="c-name">
                                Worldwide
                            </h6>
                        </a>
                    </div>
                </div>
            </SectionBox>
        </>
    )
}

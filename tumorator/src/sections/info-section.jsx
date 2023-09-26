import Counter from "../components/counter.jsx"
import AnimatedCounter from "../components/counter.jsx";

const Info = () => {
    return (
        <div>
            <div className="info-section">
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="">
                            <p className="info-maintext ">
                                the culture of regular health check-ups is nearly non-existent in iraq
                                <br/>
                                <span className="info-subtext">
 This lack of awareness poses significant risks to society's overall well-being, particularly concerning the alarming spread of cancer. Without early check-ups, diagnoses often come too late.
                        </span>
                            </p>
                        </div>
                    </div>

                    {/*    -----   */}
                    <div className="grid-item">
                        <div className="percentage-section">
                            <p className="info-maintext-percentage">
                                <AnimatedCounter/>
                                <br/>
                                <span className="info-subtext-percentage">
number of diagnosed breast cancer patients according to the iraqi ministry of health
                                </span>
                            </p>
                        </div>
                        <div className="">
                            <p>
                                <span className="info-maintext-percentage-2"> 1 of 3
                                </span>
                                <span className="small-text">
                                cases
                            </span>
                                <br/>
                                <span className="info-subtext-percentage">
number of the officially diagnosed cases with breast cancer in iraq                                </span>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}
export default Info;
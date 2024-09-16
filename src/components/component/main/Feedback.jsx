function Feedback(){
    return (
        <>
            <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
                <div className="container">
                    <div className="row hackerFont">
                        <div className="col-xl-8">
                            <h1 className="display-1 bold color_white content__title mb-4">FEEDBACK<span className="vim-caret">&nbsp;</span></h1>
                            <p className="text-grey text-spacey hackerFont lead mb-4">
                                Tell us about your experience!
                            </p>
                            <form className="needs-validation" novalidate>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label for="easeOfAccess">Ease of access?</label>
                                        <select className="custom-select d-block w-100" id="easeOfAccess">
                                            <option value="">Select Rating</option>
                                            <option>Excellent</option>
                                            <option>Average</option>
                                            <option>Poor</option>
                                            <option>N/A</option>
                                        </select>
                                        <div className="invalid-feedback">Please choose a rating</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="interface">How was the user interface?</label>
                                        <select className="custom-select d-block w-100" id="interface">
                                            <option value="">Select Rating</option>
                                            <option>Easy to understand</option>
                                            <option>Just Right</option>
                                            <option>Difficult to navigate through</option>
                                        </select>
                                        <div className="invalid-feedback">Please choose a rating</div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label for="rateQuestions">How would you rate the questions?</label>
                                        <select className="custom-select d-block w-100" id="rateQuestions">
                                            <option value="">Select Rating</option>
                                            <option>Easy to solve</option>
                                            <option>Just right</option>
                                            <option>Difficult to solve</option>
                                            <option>Difficult to decipher the questions</option>
                                        </select>
                                        <div className="invalid-feedback">Please choose a rating</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="cluesHints">How would you rate the clues/hints?</label>
                                        <select className="custom-select d-block w-100" id="cluesHints">
                                            <option value="">Select Rating</option>
                                            <option>Easy to understand</option>
                                            <option>Made the questions too easy</option>
                                            <option>Just right</option>
                                            <option>Did not help</option>
                                        </select>
                                        <div className="invalid-feedback">Please choose a rating</div>
                                    </div>
                                </div>
                        
                                <div className="row mb-4">
                                    <div className="col-md-6">Did you enjoy your experience?</div>
                                    <div className="col-md-6">
                                        <div className="btn-group w-100" role="group" aria-label="Did you enjoy your experience?">
                                            <input type="radio" id="experience-yes" name="experience" className="toggle" />
                                            <label for="experience-yes" className="btn btn-outline-primary toggle-yes">Yes</label>
                                            <input type="radio" id="experience-no" name="experience" className="toggle" />
                                            <label for="experience-no" className="btn btn-outline-primary toggle-no">No</label>
                                        </div>
                                        <div className="invalid-feedback">Please select Yes/No</div>
                                    </div>
                                </div>
                                    
                                <div className="row mb-4">
                                    <div className="col-md-6">Would you play again?</div>
                                    <div className="col-md-6">
                                        <div className="btn-group w-100" role="group" aria-label="Would you play again?">
                                            <input type="radio" id="playAgain-yes" name="playAgain" className="toggle" />
                                            <label for="playAgain-yes" className="btn btn-outline-primary toggle-yes">Yes</label>
                                            <input type="radio" id="playAgain-no" name="playAgain" className="toggle" />
                                            <label for="playAgain-no" className="btn btn-outline-primary toggle-no">No</label>
                                        </div>
                                        <div className="invalid-feedback">Please select Yes/No</div>
                                    </div>
                                </div>
                        
                                <div className="row mb-4">
                                    <div className="col-md-6">Would you recommend to others?</div>
                                    <div className="col-md-6">
                                        <div className="btn-group w-100"  role="group" aria-label="Would you recommend to others?">
                                            <input type="radio" id="recommend-yes" name="recommend" className="toggle" />
                                            <label for="recommend-yes" className="btn btn-outline-primary toggle-yes">Yes</label>
                                            <input type="radio" id="recommend-no" name="recommend" className="toggle" />
                                            <label for="recommend-no" className="btn btn-outline-primary toggle-no">No</label>
                                        </div>
                                        <div className="invalid-feedback">Please select Yes/No</div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label for="organizers">How supportive were the organizers?</label>
                                        <select className="custom-select d-block w-100" id="organizers">
                                            <option value="">Select Rating</option>
                                            <option>Very supportive</option>
                                            <option>Just Right</option>
                                            <option>Not at all</option>
                                        </select>
                                        <div className="invalid-feedback">Please choose a rating</div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label for="maintainers">How supportive were the maintainers?</label>
                                        <select className="custom-select d-block w-100" id="maintainers">
                                            <option value="">Select Rating</option>
                                            <option>Very supportive</option>
                                            <option>Just Right</option>
                                            <option>Not at all</option>
                                        </select>
                                    </div>
                                    <div className="invalid-feedback">Please choose a rating</div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label for="overallExperience">How would you rate your overall experience?</label>
                                        <select className="custom-select d-block w-100" id="overallExperience">
                                            <option value="">Select Rating</option>
                                            <option>Excellent</option>
                                            <option>Average</option>
                                            <option>Poor</option>
                                            <option>N/A</option>
                                        </select>
                                        <div className="invalid-feedback">Please choose a rating</div>
                                    </div>
                            
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-12 mb-3">
                                        <label for="additionComments">Did you face any difficulties, or do you have any additional comments or questions?</label>
                                        <textarea type="text" rows="5" className="form-control" id="address2" placeholder="Comments"></textarea>
                                    </div>
                                </div>
                                    

                                    {/* <!-- <hr className="mb-4"> --> */}
                                
                                <button className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter" type="submit">
                                    <h4>Submit</h4>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback
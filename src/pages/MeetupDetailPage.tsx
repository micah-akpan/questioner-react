import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setActivePage } from '../actions/nav';
import { meetup } from '../shared/mocks/meetup.mock'

const rsvpMeetup = () => {

}

const MeetupDetailPage = ({ match, dispatch, meetups }) => {
  // const meetup = meetups.find(meetup => meetup.id == match.params.id)
  // TODO: Pass the meetup from the store
  useEffect(() => {
    dispatch(setActivePage('meetupDetail'));
  }, []);
  return (
    <>
      <section className="q-meetup-details__primary">
        <div className="container">
          <div className="details">
            <div className="title-block">
              <h3 className="title">{meetup.topic}</h3>
              <p className="host">Organized By X</p>
            </div>
            <span className="date">{meetup.happeningOn.toString()}</span>
          </div>
        </div>
      </section>

      <section className="meetups-preview">
        <div className="container">
          <div className="meetups-preview-block">
            <div className="image-preview">
              <img src="../assets/img/showcase2.jpg" alt="a group of meetup attendees watching a presentation" />

              <section className="meetup-invite-share">
                <div>
                  <p>Will you attend this meetup?</p>

                  <div className="meetup-sched__btns">
                    <button className="q-btn yes-rsvp_btn" onClick={rsvpMeetup}>Yes</button>
                    <button className="q-btn no-rsvp_btn" onClick={rsvpMeetup}>No</button>
                    <button className="q-btn maybe-rsvp_btn" onClick={rsvpMeetup}>Maybe</button>
                  </div>
                </div>

                <p>Let your friends know about this meetup</p>
                <span className="share-title">Share:</span>
                <div className="share-media-links">
                  <span>
                    <img src="../assets/icons/facebook.svg" alt="facebook logo" />
                  </span>
                  <span>
                    <img src="../assets/icons/twitter (1).svg" alt="twitter logo" />
                  </span>
                  <span>
                    <img src="../assets/icons/instagram.svg" alt="instagram logo" />
                  </span>
                </div>

                <h3>Meetup Details</h3>
                <hr />
                <p>{meetup.agenda}</p>

                {/* Meetup Location Map Preview */}
                <div className="meetup-location-map__preview"></div>

                <section className="meetup-image-upload">
                  <h3>Meetup Photos</h3>
                  <hr />

                  <div className="meetup-photos__wrapper">

                  </div>
                </section>

                <section>
                  <div className="meetup-tags" id="meetup-tags">
                    <h3>Meetup Tags</h3>
                    <hr />

                    <h3 className="added-tags__text">Added Tags</h3>
                    <div className="meetup-tags-added"></div>
                  </div>
                </section>
              </section>

              <div class="meetup-details">
                <section className="post-question" id="post-question">
                  <div id="post-questions-directive">
                    <h3>Do you have a question?</h3>
                    <button className="q-btn ask-group-btn">Ask the group</button>
                  </div>


                  <section className="ask-question">
                    <div>
                      <div>
                        <img src="../assets/icons/avatar1.svg" alt="Bob" className="user-profile-avatar" />
                        <p className="modal-content-title question-text user-profile-text">Elitr invidunt ea diam stet
                          erat erat sit
                          amet et, lorem
                          sit
                          lorem elitr duo elitr, sit et sit sed.
                  </p>
                      </div>

                      <div className="clear"></div>
                      <form>
                        <div className="q-form__group">
                          <label htmlFor="user-question-title" className="q-form__label question-label">Give your question a
                      title</label>
                          <input type="text" id="user-question-title" placeholder="What, why, where or when are great words to start with"
                            className="q-form__input" />

                          <label htmlFor="user-question-body" className="q-form__label question-label">Your Question</label>
                          <textarea placeholder="A concise and clear question gets more comments" id="user-question-body"
                            className="q-form__textarea"></textarea>
                          <span className="user-question-word-count"></span>
                        </div>

                        <div className="q-form__group">
                          <label htmlFor="user-question-label" className="q-form__label question-label">
                            Add tags for this question (max 5)
                    </label>
                          <input type="text" className="q-form__input" id="user-question-label" />

                          <div className="q-labels"></div>
                        </div>

                        <div className="post-btn-box post-question-btn-box q-form__group">
                          <button className="q-btn post-comment-btn">Ask</button>
                        </div>
                      </form>
                    </div>
                  </section>
                </section>

                <h3>Questions asked in this meetup</h3>

                <div className="q-question-cards">
                  <div className="question-card">

                    <div className="question-block">
                      <div className="question-text-block">
                        <div className="question-text">
                          <p>Ea amet et accusam duo et gubergren et stet et. Accusam nonumy duo no
                            gubergren diam lorem et ea. Et aliquyam justo eos aliquyam magna vero stet. Ut sanctus dolor
                    </p>
                          <span className="asked-by">asked by X</span>
                          <span className="asked-when"></span>
                        </div>

                        <div className="question-icons">
                          <div className="question-icons__left">
                            <img src="../assets/icons/thumbs-up.svg" alt="A thumb pointing upwards giving an approval" title="Upvote Question" />
                            <img src="../assets/icons/thumb-down.svg" alt="A thumb pointing downwards giving a disapproval"
                              title="Downvote Question" />
                          </div>
                          <div className="question-icons__right">
                            <img src="../assets/icons/share.svg" alt="A black curved arrow pointing east" title="Share" />
                            <img src="../assets/icons/like.svg" alt="A red heart shape" title="Favorite" />
                          </div>
                        </div>
                      </div>

                      <div className="comment-box">

                        <a href="#" className="view-comments__link">View all 30 comments</a>
                        <section className="comments"></section>

                        <div className="question-comment">
                          <img src="../assets/icons/avatar1.svg" alt="Bob" />
                          <form>
                            <textarea placeholder="Add Comment"></textarea>
                            <button className="q-btn btn">Comment</button>
                          </form>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="q-questions__pagination">
                    <button className="paginate-btn">see 2 more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Modal */}
      <section className="modal comment-modal">
        <div className="modal-overlay" id="c-modal-overlay">
          <div className="modal-content">
            <div className="modal-dialog" id="c-modal-dialog">
              <div className="modal-content-card">
                <button className="close-modal-btn" id="close-modal-btn-comment"><img src="../assets/icons/cross.svg" alt="close modal" />
                </button>
                <h3 className="modal-content-title question-text">Elitr invidunt ea diam stet erat erat sit amet et, lorem sit
              lorem elitr duo elitr, sit et sit sed.</h3>
                <form>
                  <div>
                    <label htmlFor="user-comment"></label>
                    <textarea placeholder="Write your comment"></textarea>
                    <span className="user-comment-word-count"></span>
                  </div>
                  <div className="post-comment-btn-box">
                    <button className="q-btn post-comment-btn">Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meetup Floating Btns UI  */}
      <div id="meetup-floating-icons">
        <button className="q-btn" title="Favorite Meetup">
          <img src="../assets/icons/like.svg" alt="A red heart icon" />
        </button>

        <button className="q-btn" title="Ask Question">
          <img src="../assets/icons/question.svg" alt="A question mark in a circle" />
        </button>
      </div>
    </>
  );
};


const mapStateToProps = state => ({
  nav: state.nav.pages,
  meetups: state.meetups.data
});

export default connect(mapStateToProps, null)(MeetupDetailPage);

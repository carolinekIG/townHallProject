import React from 'react';
import ReactDom from 'react-dom';
import page from 'page';

// import eventHandler from './scripts/views/eventView';
import { init } from './scripts/views/eventView';
// window.populateModal = eventHandler.populateEventModal;

// vendor scripts
import './vendor/scripts/jquery-2.1.4';
import './vendor/scripts/jquery-ui';
import './vendor/scripts/cors-uploader';
import './vendor/scripts/geo-viewport';
import './vendor/scripts/mapbox-gl-v0.32.1';
import './vendor/scripts/tether';
import './vendor/scripts/bootstrap.min.js';
import './vendor/scripts/bootstrap3-typeahead.min.js';

// vendor style
import './vendor/styles/normalize.css';
import './vendor/styles/bootstrap-tagsinput.css';
import './vendor/styles/default.css';
import './vendor/styles/jquery-ui.min.css';
import './vendor/styles/jquery-ui.structure.min.css';
import './vendor/styles/normalize.css';
import './vendor/styles/railscasts.css';


// local styles
import './styles/customboot.less';
// import './scripts/controllers/routes';

class App extends React.Component {
  componentDidMount() {
    // init();
    page();
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-default navbar-main">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav"
                aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a data-toggle="tab" href="#home" class="navbar-brand hash-link" id="brand-icon">
                <img src="/Images/THP_logo_horizontal_simple.png" alt=""></img>
              </a>
            </div>
            <div class="collapse navbar-collapse" id="main-nav">
              <ul class="nav navbar-nav navbar-left" roll="tablists">
                <li class="dropdown dropdown--stateSelection">
                  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="true">
                    <span class="button-text">State Legislatures</span>
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="/" class="stateNav-federal">Federal</a>
                    </li>
                    <li>
                      <a href="/arizona" class="stateNav-arizona">Arizona</a>
                    </li>
                    <li>
                      <a href="/colorado" class="stateNav-colorado">Colorado</a>
                    </li>
                    <li>
                      <a href="/florida" class="stateNav-florida">Florida</a>
                    </li>
                    <li>
                      <a href="/maine" class="stateNav-maine">Maine</a>
                    </li>
                    <li>
                      <a href="/maryland" class="stateNav-maryland">Maryland</a>
                    </li>
                    <li>
                      <a href="/michigan" class="stateNav-michigan">Michigan</a>
                    </li>
                    <li>
                      <a href="/nevada" class="stateNav-nevada">Nevada</a>
                    </li>
                    <li>
                      <a href="/north-carolina" class="stateNav-north-carolina">North Carolina</a>
                    </li>
                    <li>
                      <a href="/oregon" class="stateNav-oregon">Oregon</a>
                    </li>
                    <li>
                      <a href="/pennsylvania" class="stateNav-pennsylvania">Pennsylvania</a>
                    </li>
                    <li>
                      <a href="/virginia" class="stateNav-virginia">Virginia</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="hash-link" data-toggle="tab" href="#about">About</a>
                </li>
                <li>
                  <a class="hash-link" href="#missing-members" data-toggle="tab" id="missing-member-tab">Missing Members</a>
                </li>
                <li>
                  <a class="hash-link" href="#join" data-toggle="tab">Join us</a>
                </li>
                <li>
                  <a href="//www.townhallpledge.com/" target="_blank">Pledge</a>
                </li>
                <li>
                  <a class="hash-link" href="#upload-video" data-toggle="tab">Share a video</a>
                </li>
                <li>
                  <a class="hash-link" data-toggle="tab" href="#submit">Submit an event</a>
                </li>
                <li>
                  <a id="privacy-policy-link" class="hash-link hidden" data-toggle="tab" aria-hidden="true" href="#privacy-policy">Privacy
                Policy</a>
                </li>
                <li>
                  <a class="hash-link hidden" data-toggle="tab" aria-hidden="true" href="#thfol-guide">THFOL guide</a>
                </li>
                <li>
                  <a class="hash-link hidden" data-toggle="tab" aria-hidden="true" href="#year-one">Look back at 2017</a>
                </li>
                <li>
                  <a class="hash-link hidden" data-toggle="tab" aria-hidden="true" href="#year-two">Look back at 2018</a>
                </li>
                <li>
                  <a class="hash-link hidden" data-toggle="tab" aria-hidden="true" href="#town-hall-pledge"></a>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="https://secure.actblue.com/donate/thp" target="_blank" class="btn" id="donate-button" role="button"
                    target="_blank">Donate</a>
                </li>
                <li>
                  <a class="social-icons" href="https://twitter.com/townhallproject" target="_blank">
                    <i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a class="social-icons" href="https://www.facebook.com/TownHallProject/" target="_blank">
                    <i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" class="social-icons hash-link text-white" href="#contact">
                    <i class="fas fa-envelope-square fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </nav>

        <div class="time-sensitive background-gray">
          <div class=" display-flex">
            <div class="happening-now-title">
              <h1><span class="break">What's</span><span class="break"> happening</span> now</h1>
              <h1><i class="fa fa-chevron-right"></i></h1>
            </div>
            <div class="happening-now-content">
              <div class="text-center">
                <h2 class="text-primary">
                  <a class="text-primary"
                    target="_blank"
                    href="https://docs.google.com/document/u/1/d/e/2PACX-1vTWD9u5IF08YH6tt76Q_S6dTwQYmm7g_2jQbZ4JaXJpEBJV0srbUfS_MseuKudHeo6YDLdyk-x1A58Z/pub">Read our September 2019 Congressional Accessibility Report and see how this Congress stacks up <i class="fa fa fa-external-link-square"></i></a>
                </h2>
                {/*<button class="btn btn-primary " type="button" name="button" id="view-accessibility-report">Infographic</button>*/}
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content">
          <div role="tabpanel" class="tab-pane page active" id="home">
            <header class="site-header clearfix">
              <section class="container container-fluid">
                <div class="row">
                  <div class="col-md-6 left-panels">
                    <div class=" text-left site-header clearfix displayoff ">
                      <div class="form-text-results col-md-12">
                        <div class="text-toggle header-large">
                          <img id="header-image" src="/Images/THP_logo_inverse.png" alt=""></img>
                        </div>
                        <div class="text-toggle header-small hidden">
                          {/*<img src="/Images/THP_logo_inverse_simple.png" alt=""></img>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 right-panels">
                    <div class="spacer">
                    </div>
                    <form id="look-up" class="form-inline text-center" action="index.html">
                      <div class="form-group text-center">
                        <label for="zip"></label>
                        <input class="form-control input-lg " type="zip" name="" value="" placeholder="Zip Code" />
                        <button type="submit" name="button" class="btn btn-primary btn-lg fath-button">Find A Town Hall</button>

                        <div id="selection-results" class="text-center ">
                          <h4 class="selection-results_content"></h4>
                        </div>

                      </div>
                    </form>
                    <div id="textresults" class="text-center "></div>
                  </div>
                </div>
              </section>
            </header>
            {/*Call to action when no events are present*/}
            <section class="background-light-blue" id="no-events">
              <div class="container container-fluid">
                <div class="col-md-12">
                  <h2 class="weight-heavy">There are no events with your representatives right now &mdash; but you can still
                make your voice heard!</h2>
                  <h3>
                    <a href=" https://5calls.org" target="_blank">Call</a>, write, or email your Senators or Representative.
                    Write a letter to the editor in your local newspaper.
                    Join an
                <a href="https://indivisible.org/groups" target="_blank">Indivisible group</a> or other local activist
                organization to create change in your community.</h3>
                  <h3>If you hear of town halls or other events with your member of Congress, don’t hesitate to
                <a class="hash-link" data-toggle="tab" href="#submit">submit them</a> to us so we can spread the word.
              </h3>
                  <h3 class="weight-heavy">Show Up. Speak Out.</h3>
                </div>
              </div>
            </section>
            <div class="container-fluid map-container-large">
              <div class="hidden show-if-no-webgl webgl-banner">
                <div class="webGl-warning" target="_blank">
                  <img class="webGl-compimg" src="../Images/map/ohno-computer.png"></img>
                  <p>Our interactive map feature uses WebGL, a plugin common in most modern browsers. Your browser does not
                    have WebGL
                working currently.</p>
                  <p>You can learn how to enable WebGL on
                <a href="https://get.webgl.org/" target="_blank">this website.</a>
                  </p>
                </div>
                <img class="webGL-kill" src="../Images/map/xmark.svg"></img>
              </div>
              <div class="row map-large">

                <div id="map">
                </div>
                <div class="map-legend hidden-xs">
                  <ul class="list-inline">
                    <li class="map-legend-li hide-if-no-webgl">
                      <dt class="map-legend__senate"></dt>
                      <dd>U.S. Senator</dd>
                    </li>
                    <li class="map-legend-li hide-if-no-webgl">
                      <dt class="map-legend__distrcit"></dt>
                      <dd>U.S. Representative</dd>
                    </li>
                    <li class="map-legend-li">
                      <dt class="map-legend-icon map-legend__person"></dt>
                      <dd>In-person</dd>
                    </li>
                    <li class="map-legend-li">
                      <dt class="map-legend-icon map-legend__staff"></dt>
                      <dd>Staff-only</dd>
                    </li>
                    <li class="map-legend-li">
                      <dt class="map-legend-icon map-legend__tele"></dt>
                      <dd>Call-in</dd>
                    </li>
                    <li class="map-legend-li">
                      <dt class="map-legend-icon map-legend__activ"></dt>
                      <dd>Activist Event</dd>
                    </li>
                    <li class="map-legend-li">
                      <dt class="map-legend-icon map-legend__campaign"></dt>
                      <dd>Campaign Event</dd>
                    </li>
                    <li class="map-legend-li">
                      <dt class="map-legend-icon map-legend__next-gen"></dt>
                      <dd>Youth Vote</dd>
                    </li>
                    <li class="map-legend-li">
                      <dt class="map-legend-icon map-legend__hr"></dt>
                      <dd>Voting Rights</dd>
                    </li>
                    <li class="map-legend-li">
                      <dt class="map-legend-icon map-legend__mfol"></dt>
                      <dd>THFOL</dd>
                    </li>
                  </ul>
                </div>
                <div class="map-legend visible-xs">
                  <div id="Legend" class="collapse">
                    <ul class="list-inline">
                      <li class="map-legend-li hide-if-no-webgl">
                        <dt class="map-legend__senate"></dt>
                        <dd>U.S. Senator</dd>
                      </li>
                      <li class="map-legend-li hide-if-no-webgl">
                        <dt class="map-legend__distrcit"></dt>
                        <dd>U.S. Representative</dd>
                      </li>
                      <li class="map-legend-li">
                        <dt class="map-legend-icon map-legend__person"></dt>
                        <dd>In-person</dd>
                      </li>
                      <li class="map-legend-li">
                        <dt class="map-legend-icon map-legend__staff"></dt>
                        <dd>Staff-only</dd>
                      </li>
                      <li class="map-legend-li">
                        <dt class="map-legend-icon map-legend__tele"></dt>
                        <dd>Call-in</dd>
                      </li>
                      <li class="map-legend-li">
                        <dt class="map-legend-icon map-legend__activ"></dt>
                        <dd>Activist Event</dd>
                      </li>
                      <li class="map-legend-li">
                        <dt class="map-legend-icon map-legend__campaign"></dt>
                        <dd>Campaign Event</dd>
                      </li>
                      <li class="map-legend-li">
                        <dt class="map-legend-icon map-legend__next-gen"></dt>
                        <dd>Youth Vote</dd>
                      </li>
                      <li class="map-legend-li">
                        <dt class="map-legend-icon map-legend__hr"></dt>
                        <dd>Voting Rights</dd>
                      </li>
                      <li class="map-legend-li">
                        <dt class="map-legend-icon map-legend__mfol"></dt>
                        <dd>THFOL</dd>
                      </li>
                    </ul>
                  </div>
                  <button data-target="#Legend" class="btn-xs btn-default visible-xs" data-toggle="collapse"><i class="fas fa-bars"></i></button>
                </div>
              </div>
            </div>
            <ul class="state-lines list-inline hide-if-no-webgl hidden">
              <li class="map-legend-li">Showing: </li>
              <button type="button" name="button" id="show-federal-borders"
                class="btn btn-xs btn-transparent border-toggle inactive">
                <li class="map-legend-li interactive federal">
                  <dt class="map-legend-line map-legend__federal"></dt>
                  <dd>Congressional districts</dd>
                </li>
              </button>
              <button type="button" name="button" id="show-state-borders"
                class="btn btn-xs btn-transparent border-toggle active">
                <ul class="list-inline">
                  <li class="map-legend-li state">
                    <dt class="map-legend-line map-legend__state_lower"></dt>
                    <dd>State House districts</dd>
                  </li>
                  <li class="map-legend-li state">
                    <dt class="map-legend-line map-legend__state_upper"></dt>
                    <dd>State Senate districts</dd>
                  </li>
                </ul>
              </button>
            </ul>
            <div class="header-with-results map-container-split hidden">
              <div class="row">
                <div class="col-md-6">
                  <section class="results multipleResults">
                    <div id="nearest" class="flexcroll nearest-with-results"></div>
                  </section>
                </div>
                <div class="col-md-6 map-small map-fixing">
                </div>
              </div>
            </div>
            <section class="email-signup--inline hidden" id="missing-member-banner">
              <div class="container container-fluid">
                <div class="row">
                  <h2 class="text-center extra-large">August Recess 2017</h2>
                  <div class="col-sm-6 graphs">
                    <h4 class="text-primary table-title text-center">Members of Congress holding town halls</h4>
                    <dt>Senate</dt>
                    <div class="progress">
                      <div class="progress-bar progress-bar-dem-no-events dem-senate" data-count={48}>
                        <span class="sr-only">Democratic no events</span>
                      </div>
                      <div class="progress-bar progress-bar-dem-has-events dem-aug-progress-senate" data-count={0}>
                        <span class="sr-only">Democratic progress</span>
                      </div>
                      <div class="progress-bar progress-bar-rep-has-events rep-aug-progress-senate" data-count={0}>
                        <span class="sr-only">Republican progress</span>
                      </div>
                      <div class="progress-bar progress-bar-rep-no-events rep-senate" data-count={52}>
                        <span class="sr-only">Republican no events</span>
                      </div>
                    </div>
                    <dt>House</dt>
                    <div class="progress">
                      <div class="progress-bar progress-bar-dem-no-events dem-house" data-count={194}>
                        <span class="sr-only">Democratic progress</span>
                      </div>
                      <div class="progress-bar progress-bar-dem-has-events dem-aug-progress-house" data-count={0}>
                        <span class="sr-only">Democratic progress</span>
                      </div>
                      <div class="progress-bar progress-bar-rep-has-events rep-aug-progress-house" data-count={0}>
                        <span class="sr-only">Republican progress</span>
                      </div>
                      <div class="progress-bar progress-bar-rep-no-events rep-house" data-count={240}>
                        <span class="sr-only">Republican progress</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-6">
                        <dl class="dl-horizontal progress-bar-key">
                          <dt class="key progress-bar-dem-no-events"></dt>
                          <dd>Democrats without town halls</dd>
                        </dl>
                        <dl class="dl-horizontal progress-bar-key">
                          <dt class="key progress-bar-dem-has-events"></dt>
                          <dd>Democrats holding town halls</dd>
                        </dl>
                      </div>
                      <div class="col-xs-6">
                        <dl class="dl-horizontal progress-bar-key">
                          <dt class="key progress-bar-rep-no-events"></dt>
                          <dd>Republicans without town halls</dd>
                        </dl>
                        <dl class="dl-horizontal progress-bar-key">
                          <dt class="key progress-bar-rep-has-events"></dt>
                          <dd>Republicans holding town halls</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 graphs">
                    <dl class="dl-horizontal graph">
                      <h4 class="text-primary table-title text-center">Total number of town halls</h4>
                      <dt>Senate</dt>
                      <dd>
                        <div class="progress bar-graph">
                          <div class="progress-bar progress-bar-dem-has-events dem-aug-total-senate" data-count={0}
                            data-max={100}>
                            <span class="sr-only">Democratic progress</span>
                          </div>
                        </div>
                        <div class="progress bar-graph">
                          <div class="progress-bar progress-bar-rep-has-events rep-aug-total-senate" data-count={0}
                            data-max={100}>
                            <span class="sr-only">Democratic progress</span>
                          </div>
                        </div>
                      </dd>
                      <dt>House</dt>
                      <dd>
                        <div class="progress bar-graph">
                          <div class="progress-bar progress-bar-dem-has-events dem-aug-total-house" data-count={0} data-max={100}>
                            <span class="sr-only">Democratic progress</span>
                          </div>
                        </div>
                        <div class="progress bar-graph">
                          <div class="progress-bar progress-bar-rep-has-events rep-aug-total-house" data-count={0} data-max={100}>
                            <span class="sr-only">Democratic progress</span>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </section>

            <section class="background-light-blue email-signup--inline" id="email-signup">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close-email">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="container container-fluid">
                <h1 id="email-title" class="text-center extra-large">Sign up to receive updates on local events.</h1>
                <form id="email-signup-form">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="col-sm-6">
                        <input type="text" class="form-control input-lg" name="first" placeholder="First Name" />
                      </div>
                      <div class="col-sm-6">
                        <input type="text" class="form-control input-lg" name="last" placeholder="Last Name" />
                      </div>
                      <div class="col-sm-6">
                        <input type="email" class="form-control input-lg" name="email" placeholder="Email" />
                      </div>
                      <div class="col-sm-6">
                        <input type="text" class="form-control input-lg" name="zipcode" placeholder="Zip Code" />
                      </div>
                      <div class="col-sm-6 hidden" id="district-subscribe">
                        <label for="districts" class="col-sm-4">Subscribe to districts:</label>
                        <input type="text" class="form-control input-lg" name="districts" data-role="tagsinput" />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="col-xs-12">
                        <button type="submit" name="button" class="btn btn-primary btn-light-background btn-lg btn-block">Sign
                      up</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>

            <div id="email-update" class="hidden background-light-blue container-fluid">
              <button id="open-email-form" class="btn btn-xs">Update your email subscription</button>
            </div>


            {/*Cards showing representatives and their contact info*/}
            <div id="representativeCards">
              <section class="container container-fluid"></section>
            </div>
            <div class="hidden-xs">
              <section class="scroll-to-form text-center">
                <p>
                  <a href="#events-table" class="scroll-button btn btn-white btn-lg">
                    <i class="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
                  </a>
                </p>
              </section>
              <a name="events-table" id="events-table"></a>
              <section class=" container container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <span class="pull-right">
                      <button id="scrollBtn">
                        <i class="fa fa-chevron-up fa-2x" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </div>
                <h2 class="text-primary table-title text-center">Upcoming Events</h2>
                <div class="row">
                  <small>
                    <ul class="list-unstyled container">
                      <li>
                        <span class="text-secondary">Town Hall</span>
                        <span> - A forum where lawmakers give legislative updates and answer open questions from constituents.</span>
                      </li>
                      <li>
                        <span class="text-secondary">"Empty Chair" Town Hall</span>
                        <span> - A citizen-organized town hall held with or without the invited lawmaker.</span>
                      </li>
                      <li>
                        <span class="text-secondary">Adopt-A-District/State</span>
                        <span> - A citizen-organized town hall featuring a member of Congress from another district.</span>
                      </li>
                      <li>
                        <span class="text-secondary">Office Hours </span>
                        <span> - Opportunity to meet and question a lawmaker's staff. Usually held in district offices but sometimes are
                "mobile office hours."</span>
                      </li>
                      <li>
                        <span class="text-secondary">Campaign Town Hall </span>
                        <span> - A town hall organized by a candidate for office - whether an incumbent or challenger. (Town Hall Project
                includes these events as a public resource--not to endorse a particular candidate or campaign).</span>
                      </li>
                      <li>
                        <span class="text-secondary">Ticketed Event</span>
                        <span> - Paid events. Typically fundraisers. (Town Hall Project includes these events as a public resource--not
                to endorse a particular candidate or campaign).</span>
                      </li>
                      <li>
                        <span class="text-secondary">TeleTown Hall Meeting </span>
                        <span> - A town hall conducted by conference call or online.</span>
                      </li>
                    </ul>
                  </small>
                </div>
                <div>
                  <ul id="all-events-table" class="list-group">
                    <li class="list-group-item list-group-heading">
                      <nav class="navbar navbar-default navbar-static-top ">
                        <ul class="nav navbar-nav navbar-left" id="filter-info">
                          <li>
                            <span id="current-state" data-current={0} data-total={0}></span>
                          </li>
                        </ul>
                        <ul id="all-events-table-dropdown-container" class="nav navbar-nav navbar-right">
                          <li class="dropdown hidden">
                            <a href="#" class="dropdown-toggle hide-on-state-view" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Member
                    <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                              <li class="downdown-title">Search by member of Congress</li>
                              <li role="separator" class="divider"></li>
                              <li>
                                <input id="memberTypeahead" type="text" class="form-control dropdown-item filter" data-provide="typeahead"
                                  placeholder="Search by member" data-filter="displayName" autocomplete="off" />
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Party
                    <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu filter">
                              <li class="downdown-title">Filter by party</li>
                              <li role="separator" class="divider"></li>
                              <li>
                                <a data-filter="party" id="Democratic" class="dropdown-item" href="#">Democratic</a>
                              </li>
                              <li>
                                <a data-filter="party" id="Republican" class="dropdown-item" href="#">Republican</a>
                              </li>
                              <li>
                                <a data-filter="party" id="Independent" class="dropdown-item" href="#">Independent</a>
                              </li>
                              <li>
                                <a data-filter="party" id="All" class="dropdown-item" href="#">All</a>
                              </li>

                            </ul>
                          </li>
                          <li class="dropdown">
                            <a href="#" class="dropdown-toggle hide-on-state-view" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">State
                    <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                              <li class="downdown-title">Search by State</li>
                              <li role="separator" class="divider"></li>
                              <li>
                                <input id="stateTypeahead" type="text" class="form-control dropdown-item filter" data-provide="typeahead"
                                  placeholder="Search by state" data-filter="stateName" autocomplete="off" />
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Event Type
                    <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu filter">
                              <li class="downdown-title">Filter by Event Type</li>
                              <li role="separator" class="divider"></li>
                              <li>
                                <a data-filter="meetingType" id="Town Hall" class="dropdown-item" href="#">Town Hall</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Empty Chair Town Hall" class="dropdown-item" href="#">Empty Chair Town Hall</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Adopt-A-District/State" href="#">Adopt-A-District/State</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Office Hours" class="dropdown-item" href="#">Office Hours</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Ticketed Event" class="dropdown-item" href="#">Ticketed Event</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Tele-Town Hall" class="dropdown-item" href="#">Tele-Town Hall</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Campaign Town Hall" class="dropdown-item" href="#">Campaign Town Hall</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Youth Vote" class="dropdown-item" href="#">Youth Vote</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Voting Rights" class="dropdown-item" href="#">Voting Rights</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="Other" class="dropdown-item" href="#">Other</a>
                              </li>
                              <li>
                                <a data-filter="meetingType" id="All" class="dropdown-item" href="#">All</a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort
                    <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu sort">
                              <li class="downdown-title">Sort Table</li>
                              <li role="separator" class="divider"></li>
                              <li>
                                <a data-filter="dateObj" id="byDate" class="dropdown-item" href="#">By Date</a>
                              </li>
                              <li>
                                <a data-filter="stateName" id="byState" class="dropdown-item hide-on-state-view" href="#">By State</a>
                              </li>
                              <li>
                                <a data-filter="displayName" id="byName" class="dropdown-item" href="#">By Name</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </li>
                    {/*end header*/}
                  </ul>
                  {/*end table*/}
                </div>
              </section>
              {/*end of hidden-xs div*/}
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="submit">
            <div class='embed-container submit-embed-container'>
              <iframe
                src='https://docs.google.com/forms/d/e/1FAIpQLSfvIJikraQCZcqUpYfDZHC7KvxDUp4zcfzlLQ7RoaDQcBZUbQ/viewform?c=0&w=1'
                style={{ borderWidth:0, width:800, height:600, frameborder:0 }}></iframe>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="contact">
            <div class='embed-container contact-embed-container'>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSffVaop5xVSxXFrRtAZsxMDqkvucAplMdC9-CPHiTXxPKQV0g/viewform?embedded=true"
                width="800" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane page" id="about">
            <header>
              <section class="container container-fluid quote-header">
                <blockquote class="col-sm-6 col-sm-offset-3">
                  <p class="text-white">"It falls to each of us to be those anxious, jealous guardians of our democracy.
                    Embrace the joyous task we have
                    been given to continually try to improve this great nation of ours because, for all our outward
                    differences,
                    we in fact all share the same proud type, the most important office in a democracy,
                <span class="text-secondary">citizen</span>."</p>
                  <footer class="text-success">President Obama,
                <cite title="Source Title">Farewell Address</cite>
                  </footer>
                </blockquote>
              </section>
            </header>
            <section class="container">
              <article class="center-block about">
                <h2 class="text-secondary-dark">About Town Hall Project</h2>
                <p class="lead">Town Hall Project empowers constituents across the country to have face-to-face conversations
                  with their elected
                  representatives. We are campaign veterans and first time volunteers. We come from a diversity of backgrounds
                  and live across the country. We share progressive values and believe strongly in civic engagement. We
                  research
                  every district and state for public events with members of Congress. Then we share our findings to promote
                  participation
              in the democratic process.</p>
                <p class="lead">This movement is diverse, open source, and powered by citizens. We are proud to be a part of
              it.</p>
                <p class="text-primary">
                  <strong>Show Up. Speak Out.</strong>
                </p>
              </article>
              <article class="row">
                <div class="col-sm-6">
                  <h3>About the Events</h3>
                  <p>Our project is currently focused on federal elected officials. We strongly believe that state
                    legislatures deserve
                attention and citizen engagement, but at the moment these events are outside our current mission.</p>

                  <p>Our event listing includes:</p>
                  <ul>
                    <li>Town halls</li>
                    <li>Other public events with members of Congress in their district/state</li>
                    <li>Ticketed events in the district/state</li>
                    <li>Staff office hours</li>
                    <li>Opportunities in Washington, D.C. to speak with your representative</li>
                  </ul>
                  <p>We do not currently include:</p>
                  <ul>
                    <li>Fundraisers outside the district/state</li>
                    <li>Inappropriate events to ask policy questions (e.g. funerals)</li>
                    <li>Campaign events where the member will not take questions</li>
                  </ul>
                </div>
                <div class="col-sm-6">
                  <h3>What to expect</h3>
                  <p>The most powerful thing you can do, as a constituent, is ask an earnest, pressing question on an issue
                    close
                    to you.
                <strong>Your personal story is incredibly valuable.</strong> It’s precisely how sometimes dry policy is
                                  connected with
                                  the lives of real people. It’s not always easy to speak up, but these times call for courage in all of us.
                Take the mic and tell your representative why she or he needs to act in your best interest.</p>
                  <p>The Town Hall Project strongly encourages you to only attend and ask questions of your own
                    representatives. Remember
                that any town hall has limited time, and a question you take is one less question for a constituent.</p>

                  <p>For more, we recommend:</p>
                  <ul>
                    <li>Indivisible's
                  <a href="https://indivisible.org/resource/town-hall-guide" target="_blank">Town Hall strategy resources</a>
                    </li>
                  </ul>
                </div>
              </article>
              <article class="row">
                <div class="col-sm-6">
                  <h3>Why Town Halls</h3>
                  <p>There is no better way to influence your representatives than in-person conversations. Town halls are a
                    longstanding
                    American tradition--where our elected representatives must listen and respond to the concerns of their
                    constituents.
                Remember: you are their boss.</p>
                  <p>We believe every citizen, no matter the party of their members of Congress, should have the opportunity
                    to speak
                with his or her representatives.</p>
                  <p>You have more power than you think. Town halls are one of the most effective ways to use it.</p>
                </div>
                <div class="col-sm-6">
                  <h3>Our Supporters</h3>
                  <p>Town Hall Project is possible because of the hard work of researchers, organizers, and developers across
                    country,
                and the generous support of hundreds of grassroots donors.</p>
                </div>
              </article>
            </section>
            <div class="banner" id="hand-raised"></div>
            <section class="container mt-5">
              <h3>Frequently Asked Questions</h3>
              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#canIJoin" aria-expanded="true"
                        aria-controls="canIJoin">
                        Can I join you?
                  </a>
                    </h4>
                  </div>
                  <div id="canIJoin" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="Can I Join You?">
                    <div class="panel-body">
                      Yes! If you are interested in joining our volunteer research team or have more specialized skills like
                      web development, contact
                      us at
                  <a href="mailto:info@townhallproject.com">info@townhallproject.com</a>.
                </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#canISupport" aria-expanded="true"
                        aria-controls="canISupport">
                        Can I support you?
                  </a>
                    </h4>
                  </div>
                  <div id="canISupport" class="panel-collapse collapse" role="tabpanel" aria-labelledby="Can I support you?">
                    <div class="panel-body">
                      Yes! Town Hall Project relies on grassroots donations like yours to continue to bring rapid event
                      research to citizens and
                      activists nationwide. Please make a donation
                  <a href="https://secure.actblue.com/donate/thp" target="_blank">here</a>. If you are interested in a larger or ongoing donation,
                                    or represent a granting foundation, please
                                    contact us at
                  <a href="mailto:info@townhallproject.com">info@townhallproject.com</a>.
                </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#ourStory" aria-expanded="true"
                        aria-controls="ourStory">
                        What’s your story?
                  </a>
                    </h4>
                  </div>
                  <div id="ourStory" class="panel-collapse collapse" role="tabpanel" aria-labelledby="What's your story?">
                    <div class="panel-body">
                      <p>At the beginning of 2017, our founder Jimmy Dahman believed that congressional town halls would play
                        an enormously
                        important role in this chapter of our democracy but was surprised to discover just how difficult
                        information
                    about these events was to find.</p>

                      <p>He recruited a small group of fellow organizers and activists who built a volunteer research team
                        and began
                        collecting these events in a google spreadsheet. Within days of launching we were completely
                        overwhelmed
                    by the intense public interest.</p>

                      <p>Throughout February, hundreds of thousands of people visited our spreadsheet--and then our
                        quickly-built
                        website--and tens of thousands attended congressional town halls. As Americans realized how the
                        radical
                    agenda being discussed in the halls of Congress was, citizens began to make their voices heard.</p>

                      <p>Today we are proud to research and public events with members of Congress, opportunities for civic
                        activism,
                    and other ways to Show Up and Speak Out. And there’s more to come...</p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#politicalPerspective"
                        aria-expanded="true" aria-controls="politicalPerspective">
                        What is your political perspective?
                  </a>
                    </h4>
                  </div>
                  <div id="politicalPerspective" class="panel-collapse collapse" role="tabpanel"
                    aria-labelledby="What is your political perspective?">
                    <div class="panel-body">
                      <p>We are transparent that the Town Hall Project team shares largely progressive policy views. We make
                        no secret
                        of our support of other progressive organizations and our opposition to this Administration’s most
                        extreme
                    policies.</p>

                      <p>But we don’t pull any punches with our research. We list every town hall held by Republicans,
                        Democrats,
                        and Independents. And we will call out “Missing Members” (those who refuse to hold town halls) of all
                    parties.</p>

                      <p>We encourage all Americans, regardless of partisan leanings, to attend public events with your
                        members of
                        Congress and make your voice heard. From the bluest district to the reddest, and everything in
                        between,
                    every single member of Congress will represent their constituents better by listening to them.</p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#townhallcom" aria-expanded="true"
                        aria-controls="townhallcom">
                        Are you affiliated with townhall.com?
                  </a>
                    </h4>
                  </div>
                  <div id="townhallcom" class="panel-collapse collapse" role="tabpanel"
                    aria-labelledby="Are you affiliated with townhall.com?">
                    <div class="panel-body">
                      Nope.
                </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#whoAreYou" aria-expanded="true"
                        aria-controls="whoAreYou">
                        Who are you?
                  </a>
                    </h4>
                  </div>
                  <div id="whoAreYou" class="panel-collapse collapse" role="tabpanel"
                    aria-labelledby="Are you affiliated with whoAreYou?">
                    <div class="panel-body">
                      <p>Town Hall Project would not be possible without the hard work and talent of dozens of research
                        volunteers,
                    web developers, communications experts, and advisors.</p>

                      <p>Our leadership team:</p>

                      <p>
                        Nathan Williams - Executive Director - Nathan co-founded Town Hall Project in 2017.
                        Previously Nathan worked on candidate and issue campaigns, including the 2008 Obama campaign.
                        He is also an award-winning independent filmmaker.
                  </p>

                      <p>
                        Megan Riel-Mehan - Lead Web Developer - Megan is a PhD chemical biologist and experienced web
                        developer,
                        currently specializing in visualizing cell biology at the Allen Institute in Seattle.
                  </p>

                      <p>
                        Jenita Igwealor - National Organizing Director - Jenita has worked in politics and labor for over ten
                        years,
                        including the 2008 and 2012 Obama campaigns. She has developed training programs for campaign staff
                        and
                        community activists interested in pay equity advocacy, civic engagement, and education affordability.
                  </p>

                      <p>
                        Robert Castaneda - National Research Director - Before joining Town Hall Project, Robert has organized
                        electoral and issue campaigns from the local to national level. In 2016, he led a team of organizers
                        in Summit County, Ohio. Robert speaks 4 languages fluently.
                  </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="container">
              <article class="row">
                <div class="col-sm-5 col-offset-1">
                  <h3>Can I send you town halls that I find?</h3>
                  <p>Yes! Please send town hall or any other congressional events to us
                <a href="#submit">here</a>. Please include as much detail as you can, including a date, time, and link or
                                  other source of the
                event information. </p>
                </div>
                <div class="col-sm-5 col-sm-offset-2">
                  <h3>What if my representatives have no public events scheduled?</h3>
                  <p>Call their
                <a href="https://www.govtrack.us/congress/members" target="_blank">district offices</a> and let them know
                                  you expect them to hold public events with their constituents. To have
                                  even more impact, join with other citizens in your district or state and organize group efforts. Visit the
                                  district office together, deliver petitions, inform your local press, or even hold an “Empty Chair” town
                                  hall
                and invite your member of Congress to fill that chair.</p>
                </div>
              </article>
              <article class="row text-center">
                <h3>Get connected locally!</h3>
                <p>
                  <a data-toggle="tab" class="hash-link" href="#contact">Contact us </a>and one of our organizers will connect
              you with groups in your area.</p>
                <a class="privacy-policy-button" data-toggle="tab" href="#privacy-policy">Privacy Policy</a>
              </article>
              <div class="col-sm-4">
              </div>
            </section>
            <section class="container">
              <div class="row">
                <div class="col-sm-12" id="disclaimer">
                  <small>The information available on or from this website is compiled by Town Hall Project volunteers and
                    provided for
                    general informational purposes only. While all efforts are made to verify accuracy of events, event
                    details
                    can change at short notice and are not guaranteed to be complete or up-to-date. Please contact your
                    representative’s
                    office to confirm. Town Hall Project shall not be liable for any special or consequential damages that
                    result
                from the direct or indirect use of, or the inability to use, the information on this site.</small>
                </div>
              </div>
            </section>
          </div>
          <div role="tabpanel" class="tab-pane" id="join">
            <header>
              <section class="container container-fluid">
                <div class="col-md-6 col-md-offset-3">
                  <p class="lead">Sign up now for personalized event updates for your congressional district and state! </p>
                  <p>We will email you town hall events with your members of Congress, as well as send the latest news on
                    upcoming
                debates in Congress and updates on our project.</p>
                </div>
              </section>
            </header>
            <section class="container container-fluid">
              <div id='can-form-area-stay-up-to-date-on-our-work' class=" col-md-6 col-md-offset-3"></div>
            </section>
            <div class="banner" id="cover">
              <div class="photo-credit text-white">
                <small>Photo credit: Trang Dang</small>
              </div>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="missing-members">
            <header>
              <section class="container container-fluid">
                <div class="col-md-6 col-md-offset-3">
                  <p class="lead">
                    <span id="mm-total-copy">Many</span> members of Congress have not held a single in-person town hall since
                    January 3, 2019.
              </p>
                  <p class="lead">
                    Is yours one of them?
              </p>
                </div>
              </section>
              <nav class="navbar navbar-default">
                <ul class="nav navbar-nav navbar-left filter-button-group">
                  <li class="block">
                    {/*<!-- <div class="col-sm-6">
                          <button class="btn btn-primary btn-block" type="button" name="button" id="view-missing-member-report">View 2017 Report</button>
                          </div> -->*/}
                    <div class="col-sm-6">
                      <p class="transparent" id="mm-current-state" data-current={0} data-total={0}>
                        Viewing ### of ### total missing members
                  </p>
                      {/*<!-- <p>
                          Click the
                    <i class="fas fa-address-book" aria-hidden="true"></i> icon on your member's card to download a poster
                        </p> -->*/}
                    </div>
                  </li>
                  <li class="block filter-button-group mm-filter-info-holder">
                    <ul class="nav navbar-nav" id="mm-filter-info">
                    </ul>
                  </li>
                </ul>
                <ul class="nav navbar-nav navbar-right btn-group">
                  <li class="nav-item dropdown filter-button-group btn-group">
                    <a href="#" class="btn btn-xs dropdown-toggle navbar-btn btn-group mm-btn-group" data-toggle="dropdown"
                      role="button" aria-haspopup="true" aria-expanded="false">Party
                  <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu button-group" data-filter-group="party">
                      <li class="downdown-title">Filter by party</li>
                      <li role="separator" class="divider"></li>
                      <li data-filter=".Democratic" id="Democratic" class="btn dropdown-item btn-filter btn-white">Democratic
                  </li>
                      <li data-filter=".Republican" id="Republican" class="btn dropdown-item btn-filter btn-white">Republican
                  </li>
                      {/*<!-- <li data-filter=".Independent" id="Independent" class="btn dropdown-item btn-filter btn-white">Independent</li> -->*/}
                      <li data-filter="" id="All" class="btn dropdown-item btn-filter btn-white">All</li>
                    </ul>
                  </li>
                  <li class=" nav-item dropdown filter-button-group btn-group">
                    <a href="#" class="btn btn-xs dropdown-toggle navbar-btn btn-group mm-btn-group" data-toggle="dropdown"
                      role="button" aria-haspopup="true" aria-expanded="false">Chamber
                  <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu button-group" data-filter-group="chamber">
                      <li class="downdown-title">Filter by chamber</li>
                      <li role="separator" class="divider"></li>
                      <li class="btn dropdown-item btn-filter btn-white" data-filter=".Senate">Senate</li>
                      <li class="btn dropdown-item btn-filter btn-white" data-filter=".House" id="Republican">House</li>
                      <li class="btn dropdown-item btn-filter btn-white" data-filter="" id="All">All</li>
                    </ul>
                  </li>
                  {/*<!-- <li class="nav-item filter-button-group button-group btn-group" data-filter-group="ahcaFilter">
                      <a class="btn btn-xs btn-filter navbar-btn mm-btn-group" data-filter=".ahca">Voted for AHCA</a>
                    </li>
                    <li class="nav-item filter-button-group button-group btn-group" data-filter-group="taxbillFilter">
                      <a class="btn btn-xs btn-filter navbar-btn mm-btn-group" data-filter=".taxBill">Voted for 2017 tax bill</a>
                      </li> -->*/}
                </ul>
                <ul class="nav navbar-nav state-button-holder filter-button-group ">
                  <ul id="state-buttons" class="button-group " data-filter-group="state">
                  </ul>
                </ul>
              </nav>
            </header>
            <div class="inset">
            </div>
            <div class="missing-member-cards-container">
              <div class="container">
                <div class="grid">
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane page" id="upload-video">
            <section class="container">
              <h1 class="text-primary text-center">Share your Town Hall Videos</h1>
              <div class="col-sm-8 col-sm-offset-2 upload-video-stage-1 text-center">
                <h3 class="margin-bottom">Have a video from a town hall you want to share?</h3>
                <button class="btn btn-primary btn-lg btn-light-background upload-video-begin center-block">Click to begin
                uploading</button>
              </div>
              <div class="col-sm-8 col-sm-offset-2 upload-video-stage-2 hidden">
                <h3>Authorizing with youtube, please wait...</h3>
              </div>
              <div class="col-sm-8 col-sm-offset-2 upload-video-stage-3 hidden">
                <form id="upload-video-form">
                  <h3>Video Information</h3>
                  <div>
                    <input type="text" class="form-control" name="title" placeholder="Title (event and date)" />
                  </div>
                  <div>
                    <textarea class="form-control" name="description"
                      placeholder="Please tell us about any particularly powerful questions, answers or other moments--and the relevant timecode when possible"></textarea>
                  </div>
                  <div>
                    <input input type="file" id="video-file-field" class="button form-control" accept="video/*" />
                  </div>
                  <div>
                    <em>By uploading a video you grant the Town Hall Project permission to use the video and share it with
                      the public.
                      You also certify that you own all rights to the content or that you are authorized by the owner to
                      make
                    the content publicly available.</em>
                  </div>
                  <button name="button" class="btn btn-primary btn-light-background btn-lg upload-video-upload"
                    disabled="true">Upload my video</button>
                </form>
              </div>
              <div class="col-sm-8 col-sm-offset-2 upload-video-stage-4 hidden">
                <h3>
                  <div class="d-inline-block margin-bottom">Upload in progress:</div>
                  <div class="d-inline-block margin-bottom">
                    <progress id="upload-video-progress" max="1" value="0"></progress>
                  </div>
                  <div class="d-inline-block margin-bottom">
                    <span id="upload-video-percent-transferred"></span>% complete.</div>
                  <div class="d-inline-block margin-bottom">About
                  <span id="upload-video-seconds-remaining"></span> remaining.</div>
                </h3>
              </div>
              <div class="col-sm-8 col-sm-offset-2 upload-video-stage-5 hidden">
                <h3>Your video has been successfully uploaded. It will be reviewed by our team shortly. Thank you!</h3>
                <button class="btn btn-primary btn-lg btn-light-background upload-video-begin center-block" id="upload-another">Upload
                another video</button>
              </div>
            </section>
          </div>
          <div role="tabpanel" class="tab-pane" id="privacy-policy">
            <header class="margin-bottom">
              <section class="container ">
                <div class="col-sm-6 col-sm-offset-4">
                  <h2>Privacy Policy</h2>
                </div>
              </section>
            </header>
            <section class="container ">
              <div class="col-sm-10 col-sm-offset-1">
                <p>This website, application or online tool is operated by Town Hall Project (“Town Hall Project”, “we” or
                  “us”).
                  This privacy policy (“Policy”) explains how personal information is collected, used, and disclosed by Town
                  Hall
                  Project with respect to your use of the townhallproject.com web site and other Town Hall Project or
                  co-branded
                  web sites, applications, online tools and other online products or services which link to this Policy (the
                  “Sites”)
                  so you can make an informed decision about using the Sites. We value your privacy and endeavor to provide
                  you
              with a safe and secure user experience.</p>
                <p>This website is operated by Town Hall Project. We are not performing any services on behalf of any member
                  of the
                  United States Congress or their offices. This website and tools are operated by Town Hall Project to help
                  you
              more easily connect with your elected representatives and better engage in the democratic process.</p>
                <p>We reserve the right to change the provisions of this Policy at any time. We will alert you that changes
                  have been
                  made by indicating on the Policy the date it was last updated. We encourage you to review this Policy from
                  time
              to time to make sure that you understand how any personal information you provide will be used.</p>
                <h3>What Personal Information Do We Collect?</h3>
                <p>Active Collection: Personal information may be collected in a number of ways when you visit our Sites. We
                  collect
                  certain information you voluntarily provide to us, such as if you join our email list, make a donation, fill
                  out a form, connect through a social feed, sign up to be a volunteer, use a tool on a Site or request
                  information.
                  Such information may include personal information, such as your name, mailing address, email address, phone
                  number,
                  and credit card information. We may also collect demographic information you may voluntarily provide from
                  time
                  to time, such as in response to questionnaires, surveys, and interactive tools such as calculators,
                  including
              gender, ethnicity, education, income and interest information.</p>
                <p>If this information is tied to personally identifiable information, it will be treated as personal
                  information.
                  Personal and demographic information may also be collected if you provide such information in connection
                  with
                  creating a profile or group, leaving comments, posting social media comments or other content, sending an
                  email
                  or message to another user, or participating in any interactive forums or features on the Sites. In
                  addition,
                  from time to time we may collect demographic, contact or other personal information you provide in
                  connection
                  with your participation in surveys, sweepstakes, games, promotions and other activities on the Sites. We may
                  also obtain information from other sources and combine that with information we collect on our Sites. This
                  information
              is not stored with any personally identifiable information you voluntarily provide.</p>
                <p>Passive Collection: When you use the Sites, some information is also automatically collected, such as your
                  Internet
                  Protocol (IP) address, your operating system, the browser type, pages viewed, the address of a referring web
                  site, and your activity on our Sites. If you access the Sites from a mobile device, we may also collect
                  information
                  about the type of mobile device you use and the type of mobile Internet browsers you use. We treat this
                  information
                  as personal information if we combine it with or link it to any of the identifying information mentioned
                  above.
              Otherwise, it is used in the aggregate only.</p>
                <p>We may also automatically collect certain information through the use of “cookies” or web beacons. Cookies
                  are
                  small data files stored on your hard drive at the request of a website. Among other things, cookies help us
                  improve
                  our Sites and your experience. Information obtained from cookies and linked to personally identifying
                  information
                  is treated as personal information. If you wish to block, erase, or be warned of cookies, please refer to
                  your
                  browser manufacturer to learn about these functions. However, if you choose to remove or reject browser
                  cookies,
                  this could affect certain features on our Sites. Web beacons are small, invisible graphic images that may be
                  used on the Sites or in emails relating to the Sites to collect certain information about usage and program
                  effectiveness
              and monitor user activity on the Sites.</p>
                <p>Advertising and Analytics Services Provided by Others. We may allow others to serve advertisements on our
                  behalf
                  across the Internet and to provide analytics services. These entities may use cookies, web beacons and other
                  technologies to collect information about your use of the Sites and other websites, including your IP
                  address,
                  web browser, pages viewed, time spent on pages, links clicked and conversion information. This information
                  may
                  be used by Town Hall Project and others to, among other things, analyze and track data, determine the
                  popularity
                  of certain content, deliver advertising and content targeted to your interests on the Sites and other
                  websites,
                  and better understand your online activity. For more information about Internet-based ads, or to opt out of
                  having
                  your web browsing information used for behavioral advertising purposes, please visit
              <a href="www.networkadvertising.org/managing/opt_out.asp">Network Advertising</a> and
              <a href="www.aboutads.info/choices">About Ads</a>.</p>
                <h4>What Personal Information Do We Share With Third Parties?</h4>
                <p>It is our policy not to share the personal information we collect from you through our Sites with third
                  parties,
                  except as described in this Policy or as otherwise disclosed on the Sites. For example, we may share
                  personal
              information as follows:</p>
                <ul>
                  <li>with vendors, consultants, and other service providers or volunteers who are engaged by or working with
                    us and
                who need access to such information to carry out their work for us;</li>
                  <li>with organizations, groups or causes that we believe have similar viewpoints, principles, activities or
                objectives;</li>
                  <li>when you give us your consent to do so, including if we notify you on the Sites, that the information
                    you provide
                will be shared or used in a particular manner and you provide such information;</li>
                  <li>when you register to get connected locally, the information you provide to Town Hall Project and our
                    organizers
                may be shared with Town Hall Project’s partner organizations;</li>
                  <li>when we are operating a co-branded site, application or tool, we may share the information you provide
                    with the
                party with whom we are co-branding;</li>
                  <li>when we believe in good faith that we are lawfully authorized or required to do so or that doing so is
                    reasonably
                    necessary or appropriate to comply with the law or legal processes or respond to lawful requests, claims
                    or
                legal authorities, including responding to lawful subpoenas, warrants, or court orders;</li>
                  <li>when we believe in good faith that doing so is reasonably necessary or appropriate to respond to claims
                    or to
                    protect the rights, property, or safety of Town Hall Project, our users, our employees, our volunteers,
                    copyright
                    owners, third parties or the public, including without limitation to protect such parties from fraudulent,
                abusive, inappropriate, or unlawful activity or use of our Site;</li>
                  <li>to enforce or apply this Policy, our Terms of Service, or our other policies or agreements; and</li>
                  <li> in connection with, or during negotiations of, any merger, reorganization, acquisition, asset sale,
                    financing
                    or lending transaction or in any other situation where personal information may be disclosed or
                    transferred
                as one of the assets of Town Hall Project.</li>
                </ul>
                <p>We are not responsible for the actions of any service providers or other third parties, nor are we
                  responsible
                  for any additional information you provide directly to any third parties, and we encourage you to become
                  familiar
                  with their privacy practices before disclosing information directly to any such parties. Nothing herein
                  restricts
                  the sharing of aggregated or anonymized information, which may be shared with third parties without your
              consent.</p>
                <p>Town Hall Project is volunteer driven and your experience is important to us. If you have any questions or
                  concerns,
                  please feel free to
              <a data-toggle="tab" class="hash-link" href="#contact">contact us</a>.</p>
              </div>
            </section>
            <div class="banner" id="cover">
            </div>
          </div>

          <div role="tabpanel" class="tab-pane" id="year-two">
            <div class="container">
              <img src="/Images/lookback2018-Desktop-nobg.png" alt="" />
            </div>
          </div>

          <div role="tabpanel" class="tab-pane" id="year-one">
            <div class="container">
              <img src="/Images/EOY_Report_Layout_noBG-01-01.png" alt="" />
            </div>
          </div>

          <div role="tabpanel" class="tab-pane" id="town-hall-pledge">
            <div class="container">
              <div class="row">
                <div class="col-md-6 img-holder">
                  <img src="../Images/svgs/THP_Pledge_House.svg" />
                </div>
                <div class="col-md-6 img-holder">
                  <img src="../Images/svgs/THP_Pledge_Senate.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade event-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            </div>
          </div>
        </div>
        <div class="modal fade missing-members-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
              <img src="/Images/Missing_Member_Report.png" alt="" />
              <a class="twitter-share-button"
                href="https://townhallproject.com/Images/Missing_Member_Report.png?text=Missing%20Members%20Report">
                Tweet</a>
              <iframe
                src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ftownhallproject.com%2FImages%2FMissing_Member_Report.png&layout=button&size=small&mobile_iframe=true&appId=1549118422076809&width=59&height=20"
                width="59" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0"
                allowTransparency="true"></iframe>
            </div>
          </div>
        </div>
        <div class="modal fade recess-report-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
              <img src="/Images/report-2019.png" alt="" />
              <a class="twitter-share-button"
                href="https://townhallproject.com/Images/report-2019.png?text=AccessibilityReport">
                Tweet</a>
              <iframe
                src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ftownhallproject.com%2FImages%2Freport-2019.png&layout=button&size=small&mobile_iframe=true&appId=1549118422076809&width=59&height=20"
                width="59" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0"
                allowTransparency="true"></iframe>
            </div>
          </div>
        </div>
        <div class="modal fade recess-report-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
              <img src="/Images/report-2019.png" alt="" />
              <a class="twitter-share-button"
                href="https://townhallproject.com/Images/report-2019.png?text=AccessibilityReport">
                Tweet</a>
              <iframe
                src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ftownhallproject.com%2FImages%2Freport-2019.png&layout=button&size=small&mobile_iframe=true&appId=1549118422076809&width=59&height=20"
                width="59" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0"
                allowTransparency="true"></iframe>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container text-center">
            <ul class="list-unstyled">
              <li>
                <a data-toggle="tab" class="hash-link text-white" href="#contact">
                  <i class="fas fa-envelope-square fa-3x"></i>
                </a>
                <a href="https://twitter.com/townhallproject" class="text-white" target="_blank">
                  <i class="fab fa-twitter-square fa-3x" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/TownHallProject/" class="text-white" target="_blank">
                  <i class="fab fa-facebook-square fa-3x" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <small>Compiled by Town Hall Project volunteers. All efforts are made to verify accuracy of events.</small>
              </li>
              <li>
                <small>Event details can change at short notice, please contact your representative to confirm.</small>
              </li>
              <li>
                <a class="privacy-policy-button" data-toggle="tab" href="#privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

const renderApp = () => {
  ReactDom.render(<App />, document.getElementById("root"))
};

renderApp();


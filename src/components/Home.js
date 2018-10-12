import React, { Component } from 'react';
import logo from '../assets/images/bitmap.jpg';

import TextBlock from './TextBlock';
import Fees from './Fees';
import ContactUs from './ContactUs';
import Tabs from './Tabs/Tabs';
import Tab from './Tabs/Tab';
import { addArticle } from "../actions/index";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class Home extends Component {

    constructor() {
        super();
        //addArticle({ title: "this", id: 1 });
        console.log("constructor");
    }

    componentDidMount() {

    }

    handleClick=()=>{
        console.log("clicked");
        this.props.addArticle({ title: "this", id: 1 });
    }

  render() {
    return (
      <div className="">
        <div className="text-wrapper">
            <div className="heading">What’s Our Goal</div>
            <div className="col">
                <div className="left-col clear">
                    <TextBlock heading="OUR MISSION" text="Our mission is to respect, foster and value every child’s cognitive development; cultural diversity; social, physical and emotional growth by providing a safe and nurturing learning environment." />
                </div>
            </div>
            <div className="col">
                <div className="left-col clear">
                    <TextBlock heading="OUR VISION" text="Our vision is to develop children’s love of learning so they become life long learners and conscientious contributing members of society.
    At SVA we are challenging students with developmentally appropriate academic activities, as this will foster the love of learning. Research has proven that this approach prevents children from feeling bored or overwhelmed. Boredom, anxiety, and frustration felt when overwhelmed all result in children getting turned off from learning. Also, it is a priority of the school to provide a safe and nurturing environment because this directly follows the Sunnah of the Prophet (S). This was very clearly stated in an article by Karen Keyworth, Director of Education for the Islamic Schools’ League of America, in the Nov/Dec 2002 issue of Islamic Horizons:" />
                </div>

                <div className="right-col clear">
                    <TextBlock heading=" -" text="Modern research has offered an explanation for that which we can infer from our Sunnah-when children are afraid, they cannot learn well. The brain will not attend to both fears and facts simultaneously.

    When a child feels fear, the brain focuses on that fear and dulls attention to other issues. The brain deliberately makes it difficult for children to learn when they are afraid because it is diverting all of its energy toward defense strategies and “flight or fight” responses in the body.

    The simple consequence of this knowledge for educators is to do all we can to decrease fear. When teachers provide a safe and happy environment in which to learn, they free up more of the children’s brain power to focus on learning." />
                </div>
            </div>
        </div>
            <div className="text-wrapper blue">
                <div className="heading sub-heading">Enrichment Programs</div>
                <div className="tabs-container">
                    <Tabs>
                        <Tab id="1" title="art exhibit">
                            <img src={logo} alt="art exhibit" height="500"/>
                            <div className="tab-label">SVA’s annual Art Exhibit showcases student art work and celebrates the arts. A special guest speaker is invited to speak to parents regarding the exhibit’s theme and how it applies to their home life.</div>
                        </Tab>
                        <Tab id="2" title="Art Orbit"/>
                        <Tab id="3" title="Book Fair"  />
                        <Tab id="4" title="Career Day"  />
                        <Tab id="5" title="Community Reaeders"  />
                        <Tab id="6" title="Field Trip"  />
                        <Tab id="7" title="Guest Speaker"  />
                    </Tabs>
                </div>
            </div>
            <div className="text-wrapper">
                <div className="heading sub-heading">Fees and Tuition</div>
                <div className="fees-container">
                    <Fees className="green" title="Pre-K" unit="$" fee="9000" per=" / year" time="8:30am – 3:00pm" snacks="Snacks" activities="Play activities" desc1="Material, Registration & Maintenance Fee are applied" desc2="Discounted rate for half day students – $8,000" />
                    <Fees title="KG- 8th Grade" unit="$" fee="7000" per=" / year" time="8:30am – 3:00pm" snacks="No meal" activities="Play activities" desc1="Material, Registration & Maintenance Fee are applied" desc2="Discounted rate available for 2 or more students: $6,500 each" />
                </div>
            </div>

            <div className="text-wrapper blue">
                <div className="heading sub-heading">Blog</div>
            </div>

            <div className="text-wrapper">
                <div className="heading sub-heading">Schedule</div>
                <iframe href="https://calendar.google.com/calendar/embed?src=svaschool.org_us4ga4j1cfs27epj0f2dfegcl0@group.calendar.google.com&ctz=America/Los_Angeles&pli=1" title="schedule"/>
            </div>
            <ContactUs />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Home);

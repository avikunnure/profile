import React, { Component } from 'react'

export default class SkillsSets extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      SkillType:"",
      SkillName:"",
      SkillDate:"",
      Location:"",
      Skill:[],
      SkillTitle:""
    };
  }
  render() {
    return (
      <div>SkillsSets</div>
    )
  }
}

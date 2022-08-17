import React,{useState} from 'react'
import InputControl from '../InputControl/InputControl';
import styles from "./Editor.module.css";

const Editor = (props) => {
    const sections=props.sections;
    const [activeSectionKey,setActiveSectionKey]=useState(Object.keys(sections)[0])
    const WorkExpBody=()=>{
        return (
            <>
            <div className={styles.detail}>
                <div className={styles.row}>
                    <InputControl
                    label="title"
                    placeholder="Enter Title eg. Frontend Developer"
                    />
                    <InputControl
                    label="Company Name"
                    placeholder="Enter Company name eg. amazon"
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                    label="Certificate Link"
                    placeholder="Enter Certificate Link"
                    />
                    <InputControl
                    label="Location"
                    placeholder="Enter Location eg. remote"
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter Start Date of Work"
                    />
                    <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter End Date of work"
                    />
                </div>

                 <div className={styles.column}>
                    <label>Enter Work Description</label>
                    <InputControl placeholder="Line 1"/>
                    <InputControl placeholder="Line 2"/>
                    <InputControl placeholder="Line 3"/>
                 </div>
            </div>
            </>

        )
    }


    const ProjectBody=()=>{
        return (
            <>
            <div className={styles.detail}>
                <div className={styles.row}>
                    <InputControl
                    label="title"
                    placeholder="Enter Title eg chat application"
                    />
                    <InputControl
                    label="OverView"
                    placeholder="Enter basic overview of project"
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                    label="Deployed Link"
                    placeholder="Enter Deployed  Link of the project"
                    />
                    <InputControl
                    label="Git hub Link"
                    placeholder="Enter Github link of project"
                    />
                </div>
                 <div className={styles.column}>
                    <label>Enter Project Description</label>
                    <InputControl placeholder="Line 1"/>
                    <InputControl placeholder="Line 2"/>
                    <InputControl placeholder="Line 3"/>
                 </div>
            </div>
            </>

        )
    }
    const EducationBody=()=>{
        return (
            <>
            <div className={styles.detail}>
                <div className={styles.row}>
                    <InputControl
                    label="title"
                    placeholder="Enter Title eg BTech"
                    />
                    <InputControl
                    label="College/School Name"
                    placeholder="Enter Name of your college/school"
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter Start Date of this education"
                    />
                    <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter End Date of this education"
                    />
                </div>
            </div>
            </>

        )
    }

    const BasicBody=()=>{
        return (
            <>
            <div className={styles.detail}>
                <div className={styles.row}>
                    <InputControl
                    label="Name"
                    placeholder="Enter your full name eg. Ashu"
                    />
                    <InputControl
                    label="Title"
                    placeholder="Enter your title eg. Frontend developer"
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                    label="LinkedIn Link"
                    placeholder="Enter your linkedIn profile link"
                    />
                    <InputControl
                    label="Github Link"
                    placeholder="Enter your github link"
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                    label="Email"
                    placeholder="Enter your Email"
                    />
                    <InputControl
                    label="Enter Phone"
                    placeholder="Enter your phone Number"
                    />
                </div>
            </div>
            </>

        )
    }
    const AchievementBody=()=>{
        return (
            <>
            <div className={styles.detail}>
                 <div className={styles.column}>
                    <label>Enter your Achievement</label>
                    <InputControl placeholder="Line 1"/>
                    <InputControl placeholder="Line 2"/>
                    <InputControl placeholder="Line 3"/>
                 </div>
            </div>
            </>

        )
    }
    const SummaryBody=()=>{
        return (
            <>
            <div className={styles.detail}>
                 <InputControl
                 label="Summary"
                 placeholder="Enter your objective/summary"
                 />
            </div>
            </>

        )
    }

    const otherBody=()=>{
        return (
            <>
            <div className={styles.detail}>
                 <InputControl
                 label="Other"
                 placeholder="Enter Something"
                 />
            </div>
            </>

        )
    }

    const generateBody=()=>{
        switch(sections[activeSectionKey]){
            case sections.basicInfo: 
            return BasicBody();
            case sections.workExp: 
            return WorkExpBody();
            case sections.project:
            return ProjectBody();
            case sections.education:
            return EducationBody();
            case sections.achievements: 
            return AchievementBody();
            case sections.summary:
            return SummaryBody();
            case sections.other:
             return otherBody(); 
        }
    }


  return (
    <div className={styles.container}>
        <div className={styles.header}>
         {
            Object.keys(sections)?.map((keys)=>{
                return (
                    <>
                    <div 
                     className={`${styles.section} ${activeSectionKey===keys?styles.active:''}`}
                     key={keys}
                     onClick={()=>setActiveSectionKey(keys)}
                     >
                        {sections[keys]}
                    </div>
                    </>
                )
                
            })
         }
        </div>
        <div className={styles.body}>
            <InputControl label="title" placeholder="Enter Title"/>
            {generateBody()}
        </div>
    </div>
  )
}

export default Editor
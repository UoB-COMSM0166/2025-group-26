# 2025-group-26
2025 COMSM0166 group 26

## Your Game

🎮 Link to your game [PLAY HERE](https://editor.p5js.org/Yuki457/full/t3Ne5YWpA)

📁 Your game lives in the [GameCode](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/Gamecode/Dukat%20Soul) folder, and is published using Github pages to the link above.

🎞 Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

📅 Our [Kanban](https://daffodil-louse-74e.notion.site/project-discussion-18f1bdec181b80ada206cdafc3035fcc)

📑 [Game details](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/Game%20Details.md)

## Your Group 🧍‍♂️👭👬
![IMG_2211 2](https://github.com/user-attachments/assets/1968bb52-32bb-43a1-8b22-b9d4c6253685)
| NAME | EMAIL | ROLE |
| --------- | -------- | -------- |
|Jianrun Han| mg24372@bristol.ac.uk| Yuki-457
|Kai Wu| fp24386@bristol.ac.uk| Flash-wk
|TSE YING CHEN| sw24863@bristol.ac.uk| Liamchenn
|YU TING WU| am24417@bristol.ac.uk| ut125
|CHENG HSUAN LEE| bo24397@bristol.ac.uk| Allison-sa

## Project Report

### Introduction

- 5% ~250 words 
- Describe your game, what is based on, what makes it novel? 

Our game, Dukat Soul, is a mini-game that merges the iconic platforming elements of Super Mario with the punishing mechanics of "Soulslike" games. Built on the familiar foundation of side-scrolling action, the game reimagines Mario’s cheerful, forgiving world into a challenging adventure that tests both patience and precision.

Inspired by the legendary Dark Souls series, Dukat Soul introduces a significantly higher difficulty curve, where players are expected to learn through repeated failure. Each level is designed with meticulous traps and unpredictable enemy patterns, forcing players to carefully study and adapt to progress. Unlike traditional Mario games, death carries a heavier penalty: lose them permanently.

What makes the game novel is its fusion of two seemingly opposite genres: the lighthearted, accessible gameplay of Super Mario with the grim, hardcore philosophy of Soulslike design. This contrast creates a fresh gameplay experience where nostalgic platforming meets strategic, high-stakes survival. By transforming a familiar icon into a vessel for unforgiving challenge, Dukat Soul offers both fans of classic Mario and Souls veterans a unique twist on two beloved gaming traditions.



### Requirements 

1.Case Diagrams\
2.User Stories\
3.Early stages design\
4.Ideation process\
5.How did you decide as a team what to develop?

- 15% ~750 words
- Use case diagrams, user stories. Early stages design. Ideation process. How did you decide as a team what to develop? 

### Design

1.System architecture\
2.Class diagrams\
3.behavioural diagrams

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams.
  
#### System architecture
![System Architecture Diagram](https://github.com/user-attachments/assets/f126b00d-7c7d-4e68-855b-87f93a1d0567)

|Module Name|Functions|Function Name|
|...|...|...|
|Game Controller|Core Command Center: Controls game state, process switching, and correspondence calls.|setup()/ draw()/ drawGame()/ respawnPlayer()/ setupNextScene()
|Input System|Handling of keyboard and mouse input, transfer to UI or player behavior|mousePressed()/ keyPressed()
|UI System|Interactive interfaces such as the main menu, upgrade menu, setup screen, etc.|drawMenu()/ drawDifficultyMenu()/ drawSettings()/ drawUpgrade()/ drawPortalSelection()/ handleUpgradeInput()/
|Player System|Controls player movement, jumping, leveling and attacking (with bullets)|collection()/ checkFallDeath()/ isPlayerOverCliff()/ respawnPlayer()
|Scene Manager|Controls scene switching, scene object initialization, and determining the current scene.|teleport(targetPortal)/ enterHiddenLevel()/ setupNextScene()/ isInCurrentScene(scene)
|Level Entities|Objects in each scene: platforms, enemies, coins, cubes, etc.| Platform/ Enemy/ Coin/ Spike/ ...
|Trap System|Various types of traps: turrets, spikes, doors and switching logic|drawGame() → call internal trap update (e.g. turret.update())/ Turret/ Bullet/ Cloud /Billboard
|NPC & Ending System|Plot characters and ending decisions: Wizard, Antidote, EndSwitch|Automatically updated by Scene.update()
|Resource System|Load images, sounds and setup keys, including volume management|preload()
|HUD System|Display player information: experience bar, time, gold, level, etc.|drawHUD()
<br>
<br>
#### Class diagrams
![UML class](https://github.com/user-attachments/assets/056a1a24-af47-47a2-a35b-5b6b4cbf9125)

     
### Implementation

- 15% ~750 words
- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

### Evaluation

- 15% ~750 words
- One qualitative evaluation (your choice) 
- One quantitative evaluation (of your choice) 
- Description of how code was tested. 

### Process 
---
#### 1.	Collaboration and Communication<br>
In this game development project, we adopted an agile development approach to ensure steady progress and high quality. We used a hybrid communication model, with in-person meetings as the main method and online meetings as a supplement, to maintain effective teamwork.<br>

Specifically, we used our Tuesday class time each week to complete team tasks, and held face-to-face team meetings every Saturday from 10 AM to 12 PM. These meetings included progress updates, to-do reviews, workload evaluation, and planning for the next sprint. We also valued user experience, so we conducted two rounds of user testing—one in the middle of the project and one near the end—using the feedback to continuously improve gameplay.<br>

For urgent or unclear issues, we used Microsoft Teams to hold quick online meetings. This helped us resolve misunderstandings in real time and prevented delays in team progress.<br>

For weekly meeting notes and task planning, we used Notion to keep records. The platform not only offers great flexibility for customizing layouts and content, but also allows all team members to access a shared workspace. This made it easy for us to track progress and reflect on our work. For daily communication, we used WeChat to share ideas, provide updates and feedback, and ask for help when needed. This allowed us to maintain smooth and efficient communication throughout the project.<br>

Overall, our structured yet flexible communication approach played a key role in keeping the team aligned, solving problems quickly, and delivering the project successfully on time.<br>

#### 2.	Tools and Collaboration Platforms <br>
**2.1	Version Control and Collaborative Development<br>**
- **GitHub: <br>**
Our team used GitHub for version control and collaborative development. Each member had their own folder and branch, allowing  them to work independently before merging into the main branch. This not only ensured code quality but also reduced communication overhead. In addition to code, other project-related materials such as game design documents, detailed game mechanics, user feedback (e.g., NASA-TLX, SUS), and class diagrams were also managed via GitHub. This helped maintain data consistency and traceability, allowing team members to track changes clearly and improving overall development efficiency and project transparency.<br><br>
- **UMLetino: <br>**
During the early planning phase, we used UMLetino to create class diagrams and sequence diagrams. These visual tools helped team members clearly understand the required classes, methods, and their interactions. By visualizing the system structure, we were able to identify dependencies and logic flows more effectively, which helped reduce structural confusion or logic conflicts later in the development process.<br><br>
    
**2.2	Task and Project Management<br>**
We used a Kanban system to manage our tasks, breaking the project down into weekly achievable units. Tasks were categorized into three columns: “Not started,” “In progress,” and “Done.” Each task included a due date and a brief description, which helped team members clearly understand responsibilities and track overall progress.<br>
<p align="center">
<img alt="截圖 2025-05-01 晚上7 27 02" src="https://github.com/user-attachments/assets/f435e196-7311-4e78-8a01-a80a1d3ef00b"width="400" />
</p>

When prioritizing tasks, we considered both their value and the effort required. For example, map design was critical to our game because the placement of enemies, items, and obstacles was manually planned rather than randomly generated. Even when other teams had already started coding, we chose to focus on designing the maps first to ensure logical consistency and a coherent gameplay experience.
Additionally, we used story points to estimate the workload for each sprint. All team members participated in the discussion to ensure a shared understanding of the effort required for each task. This approach helped maintain a sustainable development pace throughout the project.

**2.3	Design and Visualization Tools**<br>
In terms of art and visual design, our team placed great importance on consistency and creativity. We emphasized that all visual assets were created entirely by our team members—we did not use any AI-generated images or ready-made assets from online platforms. This approach ensured a high level of originality and coherence throughout the game.<br>
The main tools we used include:<br>
- **Adobe Illustrator: <br>**
Used for designing UI elements and creating the UI framework, helping to maintain a unified and visually guided interface style.<br>
- **Pinterest:<br>**
Served as a tool for collecting and defining our visual reference board. By building a shared board, all team members could view and contribute visual inspiration in real time, allowing us to quickly reach a consensus on the artistic direction.<br>
- **Procreate:**
  Used to hand-draw all in-game characters, cover illustrations, custom typefaces, and animations. <br>
- **Figma: <br>**
Used to build interactive prototypes, which allowed us to simulate the game interface during user testing. It also helped the team review layouts in real time and collaborate efficiently during the design refinement process.<br>

---
#### 3.	Team Roles and Responsibilities<br>
- Jianrun Han: <br>
Lead programmer responsible for the overall code structure and the implementation of most core game mechanics.<br>
- Tse Ying Chen: <br>
One of the gameplay designers, responsible for designing the difficulty curve and core logic of the Souls-like game system.<br>
- Kai Wu: <br>
Also a gameplay designer, responsible for planning the content of each level and developing the upgrade interface.<br>
- Yu Ting Wu:<br>
One of the visual designers, primarily responsible for drawing the main character, cover art, and environment design.<br>
- Cheng Hsuan Lee: <br>
Another visual designer, focused on designing enemy characters, UI elements, and background scenes.<br>

#### 4.Team Reflection and Improvement<br>
**4.1	Attitude and Communication**<br>
Throughout this project, we realized that maintaining a positive and proactive attitude was crucial for effective teamwork, especially toward the end of the semester when academic workloads and exam pressure increased. Every team member demonstrated a strong sense of responsibility, actively taking on tasks, participating in discussions, and completing work on time. This contributed to a productive and comfortable team atmosphere. While such as WeChat and online meetings offered convenience, we found that in-person meetings were significantly more effective when addressing complex development topics—such as designing game mechanics and level flow. Face-to-face discussions allowed us to clarify misunderstandings more quickly and coordinate our progress more effectively. For this reason, we chose to rely primarily on in-person meetings, it greatly improved the quality and efficiency of our collaboration.<br>
**4.2	Challenges in Task Management and Workflow**<br>
At the beginning of the project, our goal was to create a 2D side-scrolling game that could keep players engaged for more than 15 minutes. While this vision was both ambitious and inspiring, our team lacked practical experience and accurate workload estimation. As a result, our initial plan was overly broad, making it difficult to assess whether we could complete the project on time or meet course requirements.<br>
Through learning agile development and the concept of story points, we gradually understood how to break down tasks and apply the sprint framework effectively. For example, we originally planned to design four levels with increasing difficulty. However, after realizing the course’s main focus was on code structure and innovative gameplay mechanics, we adjusted our priorities and scaled down the scope. This allowed us to concentrate our efforts on the aspects most relevant to the course objectives.<br>

**4.3	Challenges and Learning During Development and Design**<br>
At the beginning of the project, we were unfamiliar with key course concepts such as prototypes, stakeholders, and sustainability. Although instructor encouraged us to apply these ideas to the game development process, we initially struggled to do so effectively.<br>

However, through ongoing team discussions, we gradually came to understand the value of these concepts in shaping project goals and design direction. Therefore, by the mid-stage of development, we adjusted our overall game structure and design strategies.<br>

We faced technical issues during development, such as objects not persisting between side-scrolling levels. To address this, we used pair programming—one person coded while the other debugged in real time. This improved efficiency and teamwork, allowing us to solve the problem effectively.<br>











### Conclusion

- 10% ~500 words
- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work.

## Other Details
### Weekly Homework Links
| Week | Content |
| --------- | -------- |
|[Week1](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/WeekHomework/week1.md) | Research game and create a list of game
|[Week2](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/WeekHomework/week2.md)| 1. Drawing apps<br> 2. Brainstorming ideas for your game<br> 3. Decide on TWO IDEAS
|[Week3](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/WeekHomework/week3.md)| Paper prototype 
|[Week4](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/WeekHomework/week4.md)| 1. A list of stakeholders<br> 2. Add your epics and user stories<br> 3. Write a brief (up to 300 words) reflection on what your team 
|[Week5](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/WeekHomework/week5.md)| 1. Draw up a class diagram (and sequence diagram)<br> 2. Planning poker<br> 3. Finish working through the examples
|[Week7](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/WeekHomework/week7.md)|Analyse the experts’ feedback - Heuristic Evaluation
|[Week8](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/WeekHomework/week8.md)|1. NASA TLX<br> 2. SUS 
| Adding| |
 

### Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent. 

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?

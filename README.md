# 2025-group-26
2025 COMSM0166 group 26

# Our Game
<p align="center">
  <a href="https://editor.p5js.org/Yuki457/full/t3Ne5YWpA" target="_blank">
    <img src="https://github.com/user-attachments/assets/acc4cfaa-2513-4f93-b0e4-8ad3d63c5d21" alt="poster" >
  </a>
  <br>
  <em>🎮 Click the image to start playing!</em>
</p>

📁 Your game lives in the [GameCode](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/Gamecode/Dukat%20Soul) folder, and is published using Github pages to the link above.

🎞 Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

📅 Our [Kanban](https://daffodil-louse-74e.notion.site/project-discussion-18f1bdec181b80ada206cdafc3035fcc)

📑 [Game details](https://github.com/UoB-COMSM0166/2025-group-26/blob/main/Game%20Details.md)

# Your Group 🧍‍♂️👭👬
![IMG_2211 2](https://github.com/user-attachments/assets/1968bb52-32bb-43a1-8b22-b9d4c6253685)
| NAME | EMAIL | ROLE |
| --------- | -------- | -------- |
|Jianrun Han| mg24372@bristol.ac.uk| Yuki-457
|Kai Wu| fp24386@bristol.ac.uk| Flash-wk
|TSE YING CHEN| sw24863@bristol.ac.uk| Liamchenn
|YU TING WU| am24417@bristol.ac.uk| ut125
|CHENG HSUAN LEE| bo24397@bristol.ac.uk| Allison-sa

# Project Report

## Introduction


- 5% ~250 words 
- Describe your game, what is based on, what makes it novel? 
<br>
Our game, Dukat Soul, is a mini-game that merges the iconic platforming elements of Super Mario with the punishing mechanics of "Soulslike" games. Built on the familiar foundation of side-scrolling action, the game reimagines Mario’s cheerful, forgiving world into a challenging adventure that tests both patience and precision.<br>
<br>
Inspired by the legendary Dark Souls series, Dukat Soul introduces a significantly higher difficulty curve, where players are expected to learn through repeated failure. Each level is designed with meticulous traps and unpredictable enemy patterns, forcing players to carefully study and adapt to progress. Unlike traditional Mario games, death carries a heavier penalty: lose them permanently.<br>
<br>
What makes the game novel is its fusion of two seemingly opposite genres: the lighthearted, accessible gameplay of Super Mario with the grim, hardcore philosophy of Soulslike design. This contrast creates a fresh gameplay experience where nostalgic platforming meets strategic, high-stakes survival. By transforming a familiar icon into a vessel for unforgiving challenge, Dukat Soul offers both fans of classic Mario and Souls veterans a unique twist on two beloved gaming traditions.<br>



## Requirements 

1.Case Diagrams\
2.User Stories\
3.Early stages design\
4.Ideation process\
5.How did you decide as a team what to develop?

- 15% ~750 words
- Use case diagrams, user stories. Early stages design. Ideation process. How did you decide as a team what to develop?


1.Case Diagrams<br>
![6a9ee3ecf5313a05ee73aeefa34ca22](https://github.com/user-attachments/assets/57feaafd-20d3-4ebf-828b-54e3a30559ff)
<br>

2.User Stories<br>
As a beginner to Souls-like games, I hope the game offers both simple and complex modes so that I can first learn the game through the easy mode and then switch to the hard mode for a deeper experience of the Souls-like mechanics.<br>
As a new player, I hope to find a button layout option in the menu so that I can check the controls.<br>
As someone who wants to experience a Souls-like game, I hope the game's art style is not as dark as the original Souls games, so I can play in a more relaxed mood.<br>
As a casual player, I want to pause the game at any time, so that I can take breaks without losing progress.<br>
As an experienced gamer, I hope the game displays playtime so that I can compete with my friends on how fast we complete the game.<br>
As a hardcore gamer, I want the game to be difficult and unforgiving, so that I feel a real sense of achievement when I succeed.<br>
As a player, I want to respawn quickly after dying, so that I can retry without long waiting times.<br>
<br>

3.Early stages design<br>
In the early design stage, our team established the idea of creating a Souls-like game based on Super Mario, so we directly adopted the classic side-scrolling action framework and, on that basis, designed maps and paper models for several levels. This included character jumping and attacking, an upgrade system, respawn points, level transitions, some traps, and the final boss. We considered introducing an item system midway through development but later abandoned the idea because it felt too complex. Additionally, we defined our team roles from the very beginning: the three male members with extensive Souls-like gaming experience handled the game mechanics and internal details, while the two female members with an art background worked on the visual design.
<br>

4.Ideation process<br>
During the game ideation phase, team member Kavie said to the group:<br>

"With the recent rise in popularity of Souls-like games, we could design a light Souls-like game to align with people’s interest in experiencing this genre. I am a dedicated video game player, and my favorite genre is Souls-like games. I hope to let more people experience the charm of Souls-like games. However, since these games have a high entry barrier and many people dislike the dark aesthetic, we decided to design a lightweight Souls-like game."<br>
<br>
At the same time, other team members suggested using a well-known and easy-to-pick-up game like Super Mario as the design prototype. Everyone agreed with this idea without much debate.<br>

Initially, we also discussed designing a vertical scrolling shooter, but after considering its limited potential for innovation, we eventually abandoned that idea.<br>

We discussed who our target users would be and identified our core players as those with some basic gaming experience who are also looking for a higher challenge.<br>
<br>
Some members of the team were concerned that the high difficulty might discourage average players, so we finally reached a consensus to create multi-layered difficulty settings to ensure that even casual players could enjoy the game.<br>
<br>

## Design


1.System architecture\
2.Class diagrams\
3.behavioural diagrams

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams.
  
## System Architecture
In the early stages of development, the game was implemented using a centralized code structure, with most logic handled by global functions and variables across one or two files.<br>
<br>
As the game expanded—with features like upgrades, scene transitions, branching endings, and traps—this structure became harder to maintain and scale.<br>
<br>
To address this, we reorganized the code into modular components during the **design documentation phase**, based on functional responsibilities. While this modular breakdown doesn't always reflect the physical file layout, it illustrates the logical architecture and supports future expansion and refactoring.<br>
<br>
Modules were grouped based on:<br>
1. Related functionality;<br>
2. Similar object types (e.g., scene elements);<br>
3. Scalability considerations (e.g., asset preloading with `preload()`).<br>
Ultimately, the system was divided into ten main modules.<br>
<br>

![System Architecture Diagram](https://github.com/user-attachments/assets/f126b00d-7c7d-4e68-855b-87f93a1d0567)

|Module Name|Functions|Function Name|
| --------- | -------- | -------- |
|Game Controller|Core Command Center: Controls game state, process switching, and correspondence calls.|`setup()`/ `draw()`/ `drawGame()`/ `respawnPlayer()`/ `setupNextScene()`
|Input System|Handling of keyboard and mouse input, transfer to UI or player behavior|`mousePressed()`/ `keyPressed()`
|UI System|Interactive interfaces such as the main menu, upgrade menu, setup screen, etc.|`drawMenu()`/ `drawDifficultyMenu()`/ `drawSettings()`/ `drawUpgrade()`/ `drawPortalSelection()`/ `handleUpgradeInput()`/
|Player System|Controls player movement, jumping, leveling and attacking (with bullets)|`collection()`/ `checkFallDeath()`/ `isPlayerOverCliff()`/ `respawnPlayer()`
|Scene Manager|Controls scene switching, scene object initialization, and determining the current scene.|`teleport(targetPortal)`/ `enterHiddenLevel()`/ `setupNextScene()`/ `isInCurrentScene(scene)`
|Level Entities|Objects in each scene: platforms, enemies, coins, cubes, etc.| Platform/ Enemy/ Coin/ Spike/ ...
|Trap System|Various types of traps: turrets, spikes, doors and switching logic|`drawGame()` → call internal trap update (e.g. `turret.update()`)/ Turret/ Bullet/ Cloud /Billboard
|NPC & Ending System|Plot characters and ending decisions: Wizard, Antidote, EndSwitch|Automatically updated by `Scene.update()`
|Resource System|Load images, sounds and setup keys, including volume management|`preload()`
|HUD System|Display player information: experience bar, time, gold, level, etc.|`drawHUD()`
<br>
<br>

## Class Diagrams
In our game system, we use **UML class diagrams** to model the **logical architecture and object relationships**. These diagrams clarify class responsibilities and show relationships like inheritance, composition, and aggregation.<br>
<br>
Based on the game’s structure, we organize the classes into four main sections:<br>
<br>

1️⃣ **Core Classes (Game Control and Logic)**<br>
- The **`Game` class** is the central controller, managing the game loop, state transitions (e.g., menu, gameplay, upgrade), and coordination of scenes and input.<br>
- The **`Player` class** handles character movement, actions, and combat, and integrates closely with upgrades.<br>
- The **`UpgradeSystem`** is composed within `Player` and manages XP, upgrade conditions, and abilities like double jump or weapon boosts.<br>
<br>

2️⃣ **Scene and Element Management (Aggregation)**<br>
- The **`Scene` class** manages game levels, each containing objects like:<br>
    - `Platform`, `Enemy`, `Spike`, `Coin`<br>
    - `Portal` / `Pipe` (transitions)<br>
    - `Turret`, `Bullet`, `Gate`, `Switch` (mechanics)<br>
- These are linked to the scene through **aggregation**, meaning they belong to the scene but can exist independently.<br>
<br>

3️⃣ **Interaction and Event Triggers**<br>
- Players interact with objects like `Portal` or `Pipe` to change scenes.<br>
- Special elements (e.g., `Wizard`, `Antidote`, `EndSwitch`) affect story and endings.<br>
- These interactions are handled via `Player`, influencing game state or triggering branching outcomes.<br>
<br>

4️⃣ **UI and Controls**<br>
- The **`Button` class** is a reusable UI component for menus and transitions.<br>
- The **`upgradeButton`**, a subclass of `Button`, is tailored for upgrade selection.<br>
    - This follows an **inheritance** structure, extending base button behavior.<br>
    
![UML class](https://github.com/user-attachments/assets/056a1a24-af47-47a2-a35b-5b6b4cbf9125)
<br>

## Behavioural Diagrams - Sequence Diagram
Throughout the game's design, many processes can be modeled using sequence diagrams. We selected the following three as key examples, as they represent core gameplay mechanics and involve multiple interacting modules.<br>
<br>

1️⃣ **Upgrade Sequence**<br>
![螢幕擷取畫面 2025-05-02 033016](https://github.com/user-attachments/assets/d418c398-393a-446a-bf94-a9e1df1cebcc)

**Scenario:**<br>
When the player gains enough experience, the game enters an upgrade interface to select abilities like "Double Jump" or "Weapon Upgrade".<br>

**Highlights:**<br>
The flow starts from navigating options to confirming upgrades (e.g., double jump or weapon). Data flows through `InputSystem` → `UpgradeMenu` → `GameController` → `Player`, directly modifying states like `player.canDoubleJump = true`.<br>
alt blocks represent upgrade branches, making the diagram both faithful to code and extensible.<br>
<br>

2️⃣ **Ending Branching Sequence**<br>
![螢幕擷取畫面 2025-05-02 033105](https://github.com/user-attachments/assets/a280ae4b-43af-4ab6-b4a5-2959f566c581)

**Scenario:**<br>
After defeating the final boss, the ending changes based on whether the player has a specific item (e.g., the "Antidote").<br>

**Highlights:**<br>
Triggered when `boss.hp <= 0` in `scene.update()`, activating `endSwitch`, then checking if the player holds the `Antidote` to determine the ending.<br>
An `alt` block shows the two branches. Includes `wizard.display()` for narrative interaction. The diagram reflects the full logic from game state changes to conditional rendering in `draw()`.<br>
<br>

3️⃣ **Death & Respawn Sequence**<br>
![螢幕擷取畫面 2025-05-02 033037](https://github.com/user-attachments/assets/53ba6338-71cc-4260-8a07-825f30aeb944)

**Scenario:**<br>
If the player hits a trap or falls off-screen, they die and respawn at the latest checkpoint.<br>

**Highlights:**<br>
Death is triggered by `player.y > height`, with `GameController` managing the process: calling `respawnPlayer()` and updating the HUD.<br>
<br>

## Implementation

- 15% ~750 words
- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game.

- During the development of this 2D platformer game, three major challenges shaped both the design and the implementation. Each problem required not only technical solutions, but also deep consideration of gameplay experience, logic coherence, and scalability. These challenges were:

1. Designing a flexible and engaging upgrade system
2. Implementing cross-scene traps, especially the “chasing spike”
3. Managing stateful environmental interactions across death and transition

---

## **Challenge 1: Designing the Upgrade System**

**Problem Overview:**

We wanted the player to feel rewarded for progress, but without overwhelming them. The goal was to offer a meaningful choice every few minutes: weapon or buff? The design needed to:

- Provide upgrade opportunities at regular intervals
- Clearly differentiate between upgrade paths
- Preserve upgrades through death and scene changes

**Thinking Process:**

Initial versions used instant upgrades, but that removed player agency. We then explored decision-triggered upgrades, but paused the game flow too often. Eventually, we aimed to:

- Use coins as experience tokens (10 coins = 1 level)
- Let the player actively choose between two upgrade types
- Pause gameplay only during upgrade selection

**Exploration & Solution:**

We created a leveling system tightly coupled with the collection logic. When enough coins were collected, the game entered an “upgrade state,” freezing all other interactions and offering a simple two-button UI. Behind this, we structured player attributes (like bullet ability or jump power) as level-dependent flags.

To avoid disrupting pacing, we tested various UI placements and transition timings. We also needed to preserve upgrades through death, so player level and choices were stored as persistent state, not reset upon respawn.

![upgrade-system](https://github.com/user-attachments/assets/3eb26d92-e333-429b-8f14-ca93f7935f50)

---

## **Challenge 2: Implementing the Cross-Scene Chasing Spike**

**Problem Overview:**

This trap begins moving once a switch is triggered and continues relentlessly across multiple hidden scenes, creating tension and urgency. The challenge was:

- How to make an object traverse scenes?
- How to manage its motion and collision only when visible?
- How to reset it precisely on player death?

**Thinking Process:**

Our initial instinct was to create a spike object per scene, but this led to synchronization issues. Then we imagined the trap as a global actor — not bound to any specific scene, but calculated using a “global x-position” and activated frame count.

The key realization: scenes can be static, but the trap must think “globally.”

**Exploration & Solution:**

We treated the spike’s position as a function of time: starting from frame N, each frame moves it forward at fixed speed. Its scene index is derived from its position divided by canvas width.

Collision was enabled only when the spike’s scene matched the player’s. On death, all related objects, including the spike and triggering switches, were reset to initial state.

We built a timing system to start and stop the spike, and verified its motion visually with debug overlays during testing.

![tracking-spike](https://github.com/user-attachments/assets/493337dc-4624-403e-91e4-0d8038456d52)

---

## **Challenge 3: Managing Interactions Between Environment Elements**

**Problem Overview:**

Our game world includes gates, switches, moving platforms, hidden blocks, and more. Many elements depend on others — e.g., a switch opens a gate and triggers a trap. The core challenges were:

- How to structure these interactions without spaghetti logic?
- How to ensure consistent behavior across scene transitions?
- How to control what resets and what persists after death?

**Thinking Process:**

We started with hardcoded links (e.g., `switch[0] affects gate[0]`), but this rapidly became unscalable. We needed a **modular trigger system**: each switch knows what it affects, and each element listens for activation signals.

We also identified four interaction types:

1. One-time triggers (e.g., gate opens permanently)
2. Timed triggers (e.g., moving platforms)
3. Resettable triggers (e.g., switch-trap combos)
4. Multi-condition unlocks (e.g., hidden block + location)

**Exploration & Solution:**

We revised our object model to include shared references — each switch held a list of target objects it would affect. This made each scene self-contained, reducing coupling.

To handle persistence, we used flags to decide whether an object resets or remains open. For example, final gates would reset, but hidden doors remain open after switches are triggered.

To verify correctness, we used “reset stress tests”: dying repeatedly at different phases and validating state rollback.

![multi-trap](https://github.com/user-attachments/assets/b0e3db65-ec08-4870-a306-5d1e46337f5a)

---

By deeply analyzing these three challenges and iteratively refining both design and logic, we built a system that is flexible, stable, and expandable. Our solutions combine real-time state tracking, modular signal-based design, and careful death-respawn handling — all key to delivering a responsive and rewarding gameplay experience.

## Evaluation

- 15% ~750 words
- One qualitative evaluation (your choice) 
- One quantitative evaluation (of your choice) 
- Description of how code was tested. 

To further optimise our game, we decide to investigate user experience to identify potential issues. We adopted both qualitative and quantitative evaluation methods.  
  
For qualitative evaluation, we used the Think Aloud Protocol. This is an effective usability testing method that helps capture user experiences in real time. In this evaluation, the facilitator assigns several tasks for the participants. While completing these tasks, participants are asked to verbalise their thoughts and feelings. Meanwhile, an observer presents to document any issues or comments raised by participants during the process.  

### Qualitative evaluation: Think Aloud Evaluation

Here is the further information of our think aloud evaluation. As mentioned above, the first mission of this evaluation was to set specific tasks for participants. In our evaluation, the first task required participants to successfully trigger upgrade page, and the second tasks required participants to successfully trigger portal mechanism. Our game features both the upgrade function and the portal system. The two tasks allow players not only to experience the core gameplay, but also to explore the unique elements of our game during the evaluation.  

Below are the observations recorded by observer during the evaluation:
1. Keyboard controls are not intuitive.  
   In Dukat Soul, players frequently use the move right, move left, and jump functions to clear levels. However, our default control assigned the jump function to the “J” key, which differs from the conventional setting—“spacebar”. As a result, several participants struggled to figure out how to jump at the beginning. Although we implemented a setting menu that       allows player to customise controls, clearer instructions are still necessary to ensure all user can easily understand how to operate the game.  
2. Participants were unsure if they had collected items.  
   In our game, coins are important items for triggering upgrade interface. While all participants noticed the coins during gameplay, some were unsure whether they had actually collected them, and others were uncertain about how many they had gathered. Based on this feedback, we plan to add an animation which visually shows coins being added to the experience         bar, helping players clearly understand that the coin has been collected.  
3. Attacking mechanics are monotonous.  
   Some participants commented that the attacking mechanics felt too repetitive. This is actually an opinion we look forward, as Dukat Soul is designed for players from beginners to experts. We expect experienced players to explore creative way to play, and this kind of feedback shows that they are beginning to do this. While we plan to retain the current             mechanics, we hope that players will find more various ways to complete each level.
4. Block icons are confusing.  
   In our game, certain items are hidden inside blocks that players can bump to reveal. However, some participants reported confusion about which blocks contained items. We recognise that this negatively affects the user experience, so we plan to redesign the icons to clearly distinguish between regular blocks and item-containing blocks.  

### Quantitative Evaluation: NASA TLX

In this section, we analyse the results of our quantitative evaluations using NASA TLX. For the NASA TLX, the workload scores of all participants under the two difficulties are shown below. In this table, most participants shows increased workload scores with higher difficulty. The average workload scores were 57 and 64 for the easy and difficult mode, respectively—indicating a moderate to high workload.  
  
*The workload scores with all participents*
| Participant     | 1  | 2  | 3  | 4  | 5 | 6   | 7  | 8  | 9  | 10 | AVG |
|-----------------|----|----|----|----|----|----|----|----|----|----|-----|
| Easy Mode       | 63 | 50 | 60 | 71 | 85 | 35 | 18 | 36 | 87 | 63 | 57  |
| Difficult Mode  | 68 | 57 | 66 | 73 | 88 | 42 | 24 | 54 | 87 | 77 | 64  |


Our goal is to design a soulslike game that differs from conventional one by offering lower difficulty, making it more accessible to players of all skill levels. The workload results align with our design. While the game introduces a slightly higher strain, the levels remain within an acceptable range for most users. However, one adjustment we could make is to further reduce the difficulty of the easy mode, especially for entry-level player. The statistical analysis using the Wilcoxon Signed-Rank Test shows a significant difference between the two difficulty levels, with a W statistic of 0, indicating consistent increases in perceived workload. For easier comparison, the workload scores are also presented in a bar chart in below.  
  
*The bar chart of workload scores with all participents*![image](https://github.com/user-attachments/assets/e26f855d-c7e0-4bd0-aaa9-b077b0464e57)

We also compare the average scores across 6 NASA LTX dimensions to better understand the type of strain participants have experienced, the results are shown below. The results indicate that the highest strain comes from mental demand, physical demand and effort. This outcome is perfectly aligned with our design goals. Soulslike games require players to cope with mental pressure, practice their operation repeatedly, and exert sustained effort in order to progress.  

*The workload scores across dimensions*
| Dimension       | Mental | Physical | Temporal | Performance | Effort | Frustration |
|----------------|--------|----------|----------|-------------|--------|-------------|
| Easy Mode      | 58     | 59       | 53       | 52          | 63     | 56          |
| Difficult Mode | 74     | 67       | 58       | 48          | 73     | 63          |


As mentioned earlier, we believe the easy mode might be too challenging for beginners, and this is supported by the frustration score of 56 in the easy mode, which strengthens our assumption. Adjusting the difficulty of the easy mode will be one of our future works. Figure shown in below provides a bar chart comparison to facilitate visual evaluation of these dimensions.  

*The bar chart of workload scores across dimensions*![image](https://github.com/user-attachments/assets/3a4042f6-439b-4fa5-a56e-66266c31214d)  

### Game Testing: Black-box Testing
For testing part, we use Black-box Testing to test if our game works appropriate. Here, we focus on testing three of our features, upgrade system, reset mechanism and chasing spike. The testing processes are shown below:  

Upgrade Interface Test Flow  
Test Objective:  
Verify the upgrade interface do showup after player collect enough coins.  
1. The player starts from level 1.
2. During gameplay, the tester collects coins scattered across the scene.
3. When the total reaches 10 coins, the system should automatically trigger the level-up process.
4. The game switches to the “upgrade” interface.
5. We verify that the transition occurs, and that the UI is correctly displayed with level information.
   
Reset scene after character died  
Test Objective:  
Verify that when the player dies (e.g., touches a visible spike), the current scene and relevant elements reset as expected.  
Test Steps:
1. Let the player walk into a visible spike or enemy to trigger death.
2. Observe whether the player is respawned at the last checkpoint or default starting point.
3. Observe if the scene resets:  
    All coins that were collected are reset and become collectible again.  
    All spikes become hidden again.  
    Platform coins (from breakable or bump blocks) are reset.  
4. Confirm the EXP is reset to 0 (but level remains unchanged).

Chasing Spike Cross-Scene Behavior  
Test Objective:  
Verify that a "chasing spike" continues to pursue the player even when they move to another scene.  
Test Steps:  
1. Place a chasing spike in Scene 0 near the player.
2. Trigger the spike’s visibility (e.g., by proximity).
3. Move the player towards the right edge of the scene and transition to Scene 1.
4. Observe if the chasing spike continues to follow the player into the new scene.

   
These tests ensures that both features respond correctly to expected player actions, matching design requirements.
  
## Process 

### 1.	Collaboration and Communication<br>
In this game development project, we adopted an agile development approach to ensure steady progress and high quality. We used a hybrid communication model, with in-person meetings as the main method and online meetings as a supplement, to maintain effective teamwork.<br>

Specifically, we used our Tuesday class time each week to complete team tasks, and held face-to-face team meetings every Saturday from 10 AM to 12 PM. These meetings included progress updates, to-do reviews, workload evaluation, and planning for the next sprint. We also valued user experience, so we conducted two rounds of user testing—one in the middle of the project and one near the end—using the feedback to continuously improve gameplay.<br>

For urgent or unclear issues, we used Microsoft Teams to hold quick online meetings. This helped us resolve misunderstandings in real time and prevented delays in team progress.<br>

For weekly meeting notes and task planning, we used Notion to keep records. The platform not only offers great flexibility for customizing layouts and content, but also allows all team members to access a shared workspace. This made it easy for us to track progress and reflect on our work. For daily communication, we used WeChat to share ideas, provide updates and feedback, and ask for help when needed. This allowed us to maintain smooth and efficient communication throughout the project.<br>

Overall, our structured yet flexible communication approach played a key role in keeping the team aligned, solving problems quickly, and delivering the project successfully on time.<br>

### 2.	Tools and Collaboration Platforms <br>
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
<p align="center">
  <img src="https://github.com/user-attachments/assets/6034ddc9-b44e-4fdc-b136-13d44b3d5d46" width="400" alt="未命名的作品 7 (1)">
  <br>
  <em>▲ Monster Character Design Process </em>
</p>


### 3.	Team Roles and Responsibilities<br>
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

### 4.Team Reflection and Improvement<br>
**4.1	Attitude and Communication**<br>
Throughout this project, we realized that maintaining a positive and proactive attitude was crucial for effective teamwork, especially toward the end of the semester when academic workloads and exam pressure increased. Every team member demonstrated a strong sense of responsibility, actively taking on tasks, participating in discussions, and completing work on time. This contributed to a productive and comfortable team atmosphere. While such as WeChat and online meetings offered convenience, we found that in-person meetings were significantly more effective when addressing complex development topics—such as designing game mechanics and level flow. Face-to-face discussions allowed us to clarify misunderstandings more quickly and coordinate our progress more effectively. For this reason, we chose to rely primarily on in-person meetings, it greatly improved the quality and efficiency of our collaboration.<br><br>
**4.2	Challenges in Task Management and Workflow**<br>
At the beginning of the project, our goal was to create a 2D side-scrolling game that could keep players engaged for more than 15 minutes. While this vision was both ambitious and inspiring, our team lacked practical experience and accurate workload estimation. As a result, our initial plan was overly broad, making it difficult to assess whether we could complete the project on time or meet course requirements.<br>
Through learning agile development and the concept of story points, we gradually understood how to break down tasks and apply the sprint framework effectively. For example, we originally planned to design four levels with increasing difficulty. However, after realizing the course’s main focus was on code structure and innovative gameplay mechanics, we adjusted our priorities and scaled down the scope. This allowed us to concentrate our efforts on the aspects most relevant to the course objectives.<br><br>

**4.3	Challenges and Learning During Development and Design**<br>
At the beginning of the project, we were unfamiliar with key course concepts such as prototypes, stakeholders, and sustainability. Although instructor encouraged us to apply these ideas to the game development process, we initially struggled to do so effectively.<br>

However, through ongoing team discussions, we gradually came to understand the value of these concepts in shaping project goals and design direction. Therefore, by the mid-stage of development, we adjusted our overall game structure and design strategies.<br>

We faced technical issues during development, such as objects not persisting between side-scrolling levels. To address this, we used pair programming—one person coded while the other debugged in real time. This improved efficiency and teamwork, allowing us to solve the problem effectively.<br>


## Conclusion<br>
After a full semester of hard work, we successfully developed and completed our game "Dukat Soul". From early-stage brainstorming and gameplay design to later programming and team collaboration, every stage came with its own challenges. Through this process, we gained valuable experience and grew as a team. Each member made important contributions in areas such as game experience, visual design, sound effects, and coding system architecture, helping us complete the project as a whole.<br>

Looking back, we realized that if we had understood the core content of the course and the key development goals earlier, we could have avoided spending extra time fixing and adjusting the game in later stages. Our team had many ambitious ideas and tried to include various gameplay and levels. However, due to limited understanding of stakeholders and the course requirement of presenting a “significant challenge,” we changed direction several times in the beginning, which affected our progress.<br>

Even so, we still managed to turn many creative ideas into working features, such as the player upgrade system, level switching, item and coin systems, and challenging traps. We also faced difficulties due to the different academic backgrounds of team members. Although some members lacked technical experience, our diverse skills and perspectives helped the project become more complete in terms of design, storytelling, and interaction. A good game requires not only solid code, but also a well-balanced and creative experience.<br><br>

In the end, while our game meets the needs of most players, there is still room for improvement. From testing and feedback, we learned that UI/UX design and game mechanics have a big impact on the overall experience, so we will make these our focus in future development.
For UI design, we plan to add more visual and sound feedback, such as animations when collecting coins or visual/sound effects when a player dies. These improvements will make the game more immersive and responsive. For UX, we noticed that the difference between easy and normal levels was not clear, and beginners lacked proper guidance. We plan to adjust the difficulty and level goals so that the game can better fit players of different skill levels, and increase their sense of achievement and engagement.<br>
We also believe that emotional experience and sound design are important for immersion. The current sound effects and music are usable, but they don’t fully match the game’s style. In the future, we hope to create or commission custom music that better fits the world of the game.<br>

In terms of game mechanics, since this is a semi-open-world game, we plan to add more interactive map elements and items. This will give players new content to explore each time they play, and increase replay value. We also want to improve the combat system by designing more types of attacks to make the game more exciting and strategic.<br><br>

Overall, this project taught us how to divide work under pressure, use tools and methods flexibly, and improve product quality through constant revision and reflection. More importantly, we developed our teamwork and problem-solving skills through this valuable hands-on experience, which will help us in future projects.




# Other Details
## Weekly Homework Links
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
 

## Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent.
<br>
| Name | Contribution | Weight |
| --------- | -------- | -------- |
|Jianrun Han|Lead programmer responsible for the overall code structure and the implementation of most core game mechanics.|2
|Tse Ying Chen|One of the gameplay designers, responsible for designing the difficulty curve and core logic of the Souls-like game system.|1
|Kai Wu|Also a gameplay designer, responsible for planning the content of each level and developing the upgrade interface.|1
|Yu Ting Wu|One of the visual designers, primarily responsible for drawing the main character, cover art, and environment design.|1
|Cheng Hsuan Lee|Another visual designer, focused on designing enemy characters, UI elements, and background scenes.|1
<br>
## Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?

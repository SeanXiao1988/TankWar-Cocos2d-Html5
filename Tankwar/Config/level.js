var level = {
    scene1: {
        level1: {
            tip: s_tips1_1,
            map: map.map1,
            bgImage: s_qipan,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type1,
            ],
            enemyTankNum: [4],
            itemType:[],
            itemPosition:[],
        },
        level2: {
            tip: s_tips1_2,
            map: map.map2,
            bgImage: s_qipan,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type1,
            ],
            enemyTankNum: [5],
            itemType: [],
            itemPosition: [],
        },
        level3: {
            tip: s_tips1_3,
            map: map.map3,
            bgImage: s_qipan,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type1,    
                tankType.enemyTank.type2,
                tankType.enemyTank.type1,  
            ],
            enemyTankNum: [2,2,2],
            itemType: [
                ItemAddPlayerHP,
            ],
            itemPosition: [
                {x: 500, y: 280},            
            ],
        },
        level4: {
            tip: s_tips1_4,
            map: map.map4,
            bgImage: s_qipan,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type1,
                tankType.enemyTank.type2,
                tankType.enemyTank.type4,
                tankType.enemyTank.type1,
            ],
            enemyTankNum: [2,2,1,2],
            itemType: [
                ItemAddTankSpeed,
            ],
            itemPosition: [
                {x: 278, y: 280},
            ],
        },
        level5: {
            tip: s_tips1_5,
            map: map.map5,
            bgImage: s_qipan,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type4,
                tankType.enemyTank.type1,      
                tankType.enemyTank.type2,
                tankType.enemyTank.type3,
                tankType.enemyTank.type1,
            ],
            enemyTankNum: [1,2,2,2,2],
            itemType: [
                ItemAddPlayerHP,
                ItemAddTankSpeed,
                ItemDisplayInvisbleTank,
            ],
            itemPosition: [
                {x: 204, y: 500},
                {x: 570, y: 460},
                {x: 460, y: 160},
            ],
        },
        level6: {
            tip: s_tips1_6,
            map: map.map6,
            bgImage: s_qipan,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type4,
                tankType.enemyTank.type3,
                tankType.enemyTank.type1,      
                tankType.enemyTank.type2,
                tankType.enemyTank.type1,
                tankType.enemyTank.type3,
            ],
            enemyTankNum: [2,2,2,2,2,2],
            itemType: [
                ItemAddPlayerHP,
                ItemAddPlayerHP,
                ItemAddTankSpeed,
                ItemDisplayInvisbleTank,
                ItemFreeze,
            ],
            itemPosition: [
                {x: 204, y: 280},
                {x: 570, y: 460},
                {x: 460, y: 160},
                {x: 390, y: 400},
                {x: 600, y: 200},
            ],
        },
        level7: {
            tip: null,
            map: map.map7,
            bgImage: s_qipan,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type4,
                tankType.enemyTank.type2,
                tankType.enemyTank.type3,
                tankType.enemyTank.type1,      
                tankType.enemyTank.type2,
                tankType.enemyTank.type3,
            ],
            enemyTankNum: [2,1,2,2,3,2],
            itemType: [
                ItemAddPlayerHP,
                ItemAddPlayerHP,
                ItemFreeze,
                ItemFreeze,
                ItemDisplayInvisbleTank,
            ],
            itemPosition: [
                {x: 100, y: 460},
                {x: 570, y: 460},
                {x: 460, y: 160},
                {x: 360, y: 260},
                {x: 390, y: 500},
            ],
        },
        level8: {
            tip: s_tips1_8,
            map: map.map8,
            bgImage: s_qipan,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.boss1,
                tankType.enemyTank.type3,
                tankType.enemyTank.type1,
                tankType.enemyTank.type2,
                tankType.enemyTank.type3,
            ],
            enemyTankNum: [1,2,2,2,2],
            itemType: [
                ItemAddPlayerHP,
                ItemAddPlayerHP,
                ItemAddTankSpeed,
                ItemAddTankSpeed,
                ItemFreeze,
                ItemDisplayInvisbleTank,
            ],
            itemPosition: [
                {x: 204, y: 280},
                {x: 570, y: 460},
                {x: 170, y: 560},
                {x: 460, y: 160},
                {x: 390, y: 400},
                {x: 600, y: 200},
            ],
        }
    },

    scene2: {
        level1: {
            tip: s_tips2_1,
            map: map.map9,
            bgImage: s_scenegrass01,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type2,
                tankType.enemyTank.type3,
                tankType.enemyTank.type5,
            ],
            enemyTankNum: [2,2,2],
            itemType: [
                ItemDisplayInvisbleTank,
                ItemAddBulletSpeed,
            ],
            itemPosition: [
                {x: 390, y: 400},
                {x: 170, y: 560},
            ],
        },
        level2: {
            tip: null,
            map: map.map10,
            bgImage: s_scenegrass01,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type2,
                tankType.enemyTank.type5,
                tankType.enemyTank.type3,
                tankType.enemyTank.type4,
                tankType.enemyTank.type5,
            ],
            enemyTankNum: [2,2,2,1,2],
            itemType: [
                ItemAddPlayerHP,
                ItemFreeze,
                ItemDisplayInvisbleTank,
            ],
            itemPosition: [
                {x: 570, y: 460},
                {x: 170, y: 560},
                {x: 360, y: 200},
            ],
        },
        level3: {
            tip: s_tips2_3,
            map: map.map11,
            bgImage: s_scenegrass02,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type2,
                tankType.enemyTank.type3,
                tankType.enemyTank.type5,
                tankType.enemyTank.type3,
                tankType.enemyTank.type6,
                tankType.enemyTank.type5,
            ],
            enemyTankNum: [2,2,2,2,2,2],
            itemType: [
                ItemAddPlayerHP,
                ItemAddBulletSpeed,
                ItemFreeze,
                ItemDisplayInvisbleTank,
            ],
            itemPosition: [
                {x: 100, y: 460},
                {x: 570, y: 460},
                {x: 460, y: 160},
                {x: 360, y: 260},
            ],
        },
        level4: {
            tip: null,
            map: map.map12,
            bgImage: s_scenegrass02,
            MaxTank: 4,
            enemyTankType: [
                tankType.enemyTank.type2,
                tankType.enemyTank.type3,
                tankType.enemyTank.type5,
                tankType.enemyTank.type2,
                tankType.enemyTank.type3,
                tankType.enemyTank.type6,
            ],
            enemyTankNum: [2,2,4,2,3,2],
            itemType: [
                ItemAddPlayerHP,
                ItemAddBulletSpeed,
                ItemAddTankSpeed,
                ItemFreeze,
            ],
            itemPosition: [
                {x: 100, y: 460},
                {x: 670, y: 460},
                {x: 460, y: 160},
                {x: 360, y: 260},
                {x: 390, y: 500},
            ],
        },
        level5: {
            tip:  s_tips2_5,
            map: map.map13,
            bgImage: s_scenegrass03,
            MaxTank: 6,
            enemyTankType: [
                tankType.enemyTank.type3,
                tankType.enemyTank.type5,
                tankType.enemyTank.type3,
                tankType.enemyTank.type6,
                tankType.enemyTank.type5,    
                tankType.enemyTank.type8,   
                tankType.enemyTank.type6,   
            ],
            enemyTankNum: [2,2,2,2,2,2,2],
            itemType: [
                ItemAddPlayerHP,
                ItemAddBulletSpeed,
                ItemAddTankSpeed,      
                ItemFreeze,
                ItemAddBulletMax,            
            ],
            itemPosition: [
                {x: 204, y: 280},
                {x: 204, y: 490},
                {x: 460, y: 160},
                {x: 460, y: 100},
                {x: 600, y: 200},
            ],
        },
        level6: {
            tip: null,
            map: map.map14,
            bgImage: s_scenegrass03,
            MaxTank:6,
            enemyTankType: [
                tankType.enemyTank.type2,
                tankType.enemyTank.type8,  
                tankType.enemyTank.type5,
                tankType.enemyTank.type6,     
                tankType.enemyTank.type8,   
                tankType.enemyTank.type5,
                tankType.enemyTank.type6,   
            ],
            enemyTankNum: [2,2,2,2,2,2,1],
            itemType: [
                ItemAddPlayerHP,
                ItemAddBulletSpeed,
                ItemAddTankSpeed,
                ItemAddBulletMax,
                ItemFreeze,
            ],
            itemPosition: [
                {x: 240, y: 280},
                {x: 370, y: 460},
                {x: 760, y: 360},
                {x: 390, y: 200},
                {x: 650, y: 200},
            ],
        },
        level7: {
            tip:  s_tips2_7,
            map: map.map15,
            bgImage: s_scenegrass04,
            MaxTank:8,
            enemyTankType: [
                tankType.enemyTank.type4,  
                tankType.enemyTank.type8,  
                tankType.enemyTank.type6,     
                tankType.enemyTank.type7,  
                tankType.enemyTank.type6, 
                tankType.enemyTank.type8,  
            ],
            enemyTankNum: [1,2,2,2,2,2],
            itemType: [
                ItemBomb,
                ItemAddPlayerHP,
                ItemFreeze,
                ItemAddBulletSpeed,
                ItemAddTankSpeed,
                ItemAddBulletMax,
            ],
            itemPosition: [
                {x: 304, y: 500},
                {x: 270, y: 370},
                {x: 460, y: 160},
                {x: 370, y: 460},
                {x: 210, y: 360},
                {x: 690, y: 400},
            ],
        },
        level8: {
            tip:  s_tips2_8,
            map: map.map16,
            bgImage: s_scenegrass04,
            MaxTank: 6,
            enemyTankType: [
                tankType.enemyTank.boss2,
                tankType.enemyTank.type8,  
                tankType.enemyTank.type4,     
                tankType.enemyTank.type5,    
                tankType.enemyTank.type6,     
                tankType.enemyTank.type7, 
                tankType.enemyTank.type8,  
                tankType.enemyTank.type7, 
                tankType.enemyTank.type6, 
            ],
            enemyTankNum: [1,2,1,2,2,2,2,2,2],
            itemType: [
                ItemBomb,
                ItemBomb,
                ItemFreeze,
                ItemAddPlayerHP,
                ItemAddPlayerHP,
                ItemAddBulletSpeed,
            ],
            itemPosition: [
                {x: 270, y:260},
                {x: 520, y: 360},
                {x: 160, y: 120},
                {x: 270, y: 470},
                {x: 660, y: 310},
                {x: 300, y: 60},
            ],
        },     
    }
}
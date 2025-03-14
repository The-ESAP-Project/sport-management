const fs = require('fs');
const path = require('path');
const calculateSitAndReachScore = require('./sitAndReach');
const calculateEnduranceRunScore = require('./enduranceRun');
const calculateRunning50mScore = require('./shortDistanceRunning');
const calculateSitUpAndPullUpScore = require('./sitUpAndPullUp');
const calculateStandingLongJumpScore = require('./standingLongJump');
const calculateVitalCapacityScore = require('./vitalCapacity');

class StudentData{
    /**
     * 
     * @param {string} 学生姓名
     * @param {string} 学生学号
     * @param {string} 学生性别
     * @param {number} 查询指定年份数据
     */
    constructor(name,stu_id,gender,year){
        this.name = name;
        this.stu_id = stu_id;
        this.gender = gender;
        this.year = year;
        this.cache_origin_data = {};
        this.cache_data = {};
    }
    async __getRemoteData(){
        //...todo
    }

    async getFullData(){
        //EXAMPLE
        if (this.cache_origin_data.length == 0){
            //...getRemoteData
        }else{
            //获得耐力跑分数
            erScore = calculateEnduranceRunScore(cache_origin_data.longRun, this.gender, this.grade_id);
            //获得50米跑分数
            sdrScore = calculateRunning50mScore(cache_origin_data.shortRun, this.gender, this.grade_id);
            //获得坐位体前屈分数
            sarScore = calculateSitAndReachScore(cache_origin_data.sitAndReach, this.gender, this.grade_id);
            //获得立定跳远分数
            sljScore = calculateStandingLongJumpScore(cache_origin_data.longJump, this.gender, this.grade_id);
            //获得肺活量分数
            vcScore = calculateVitalCapacityScore(cache_origin_data.vitalCapacity, this.gender, this.grade_id);
            //获得仰卧起坐/引体向上分数
            sapScore = calculateSitUpAndPullUpScore(cache_origin_data.sitUpAndPullUp, this.gender, this.grade_id);
            this.cache_data = {
                erScore,
                sdrScore,
                sarScore,
                sljScore,
                vcScore,
                sapScore
            }
        }
    }

    //...todo
}

class GradeData{
    /**
     * @param {string} 年级
     */
    constructor(grade_id){
        this.grade_id = grade_id
        /**
         * this.data=
         * {
         *   "stu1_id":{
         *     "name": str,
         *     "gender": str,
         *     "year": int,
         *     "data": {
         *       "erScore": int,
         *       "sdrScore": int,
         *       "sarScore": int,
         *       "sljScore": int,
         *       "vcScore": int,
         *       "sapScore": int,
         *     },
         *    "stu2_id":{...},
         *     ...
         *   }
         * }
         */
        this.data = {};
        this.standard = {};
    }

    async __getRemoteData(){
        //...todo
    }

    async getAnalyseScoreData(){
        //EXAMPLE
        //maybe can be optimized
        for (let stu_id in this.data){
            let data = this.data[stu_id];
            for (let key in data){
                let average = data[key].reduce((a, b) => a + b, 0) / data[key].length;
                let percentage = (average / this.standard[key]) * 100;
                this.data[stu_id][key] = percentage;
            }
        }
    }

    

    //...todo
}

//...todo
module.exports = {StudentData, GradeData};

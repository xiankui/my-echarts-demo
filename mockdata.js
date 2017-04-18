/**
 * 模拟数据
 */

var total = {
   CurrentMonthProcessedPercent: 0.8,
   CurrentMonthCompletedPercent: 0.6,
   UpdateTime: '2017-04-18',
   TodayNationalGMV: 100000000,
   TodayNationalCommission: 10000000,
   TodayNationalCommissionRate: 0.1,
   CurrentMonthNationalGMV: 100000000,
   CurrentMonthNationalCommission: 10000000,
   CurrentMonthNationalCommissionRate: 0.1,
}

var column = {
   today: [{
       ProjectName: '出境游',
       GMV: 305500,
       Commission: 15500,
       CommissionRate: 0.015,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '国内游',
       GMV: 136300,
       Commission: 10300,
       CommissionRate: 0.013,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '邮轮',
       GMV: 78500,
       Commission: 7500,
       CommissionRate: 0.075,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '跟团游',
       GMV: 47300,
       Commission: 6300,
       CommissionRate: 0.023,
       UpdateTime: '2017-04-18'
   }, {
      ProjectName: '自由行',
       GMV: 52500,
       Commission: 9500,
       CommissionRate: 0.045,
       UpdateTime: '2017-04-18' 
   }],
   month: [{
       ProjectName: '出境游',
       GMV: 305500 * 30,
       Commission: 15500 * 30,
       CommissionRate: 0.015,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '国内游',
       GMV: 136300 * 30,
       Commission: 10300 * 30,
       CommissionRate: 0.013,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '邮轮',
       GMV: 78500 * 30,
       Commission: 7500 * 30,
       CommissionRate: 0.075,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '跟团游',
       GMV: 47300 * 30,
       Commission: 6300 * 30,
       CommissionRate: 0.023,
       UpdateTime: '2017-04-18'
   }, {
      ProjectName: '自由行',
       GMV: 52500 * 30,
       Commission: 9500 * 30,
       CommissionRate: 0.045,
       UpdateTime: '2017-04-18' 
   }],
}

var pie = {
   today: [{
       ProjectName: '出境游',
       GMV: 305500,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.015,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '国内游',
       GMV: 136300,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.013,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '邮轮',
       GMV: 78500,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.075,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '跟团游',
       GMV: 47300,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.023,
       UpdateTime: '2017-04-18'
   }, {
      ProjectName: '自由行',
       GMV: 52500,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.045,
       UpdateTime: '2017-04-18' 
   }],
   month: [{
       ProjectName: '出境游',
       GMV: 305500 * 50,
       GMVRate: 0.05,
       Revenue: 2000,
       RevenueRate: 0.015,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '国内游',
       GMV: 136300 * 30,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.013,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '邮轮',
       GMV: 78500 * 30,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.075,
       UpdateTime: '2017-04-18'
   }, {
       ProjectName: '跟团游',
       GMV: 47300 * 30,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.023,
       UpdateTime: '2017-04-18'
   }, {
      ProjectName: '自由行',
       GMV: 52500 * 30,
       GMVRate: 0.01,
       Revenue: 2000,
       RevenueRate: 0.045,
       UpdateTime: '2017-04-18' 
   }],
}

var line = {
   total: [{
       ProjectName: '出境游',
       Month: '2017-01-01',
       BudgetCompetedPercent: 0.5,
       RevenueCompetedPercent: 0.4,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '国内游',
       Month: '2017-02-01',
       BudgetCompetedPercent: 0.7,
       RevenueCompetedPercent: 0.2,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '邮轮',
       Month: '2017-03-01',
       BudgetCompetedPercent: 0.3,
       RevenueCompetedPercent: 0.1,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '跟团游',
       Month: '2017-04-01',
       BudgetCompetedPercent: 0.5,
       RevenueCompetedPercent: 0.4,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '自由行',
       Month: '2017-05-01',
       BudgetCompetedPercent: 0.6,
       RevenueCompetedPercent: 0.3,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '自由行',
       Month: '2017-06-01',
       BudgetCompetedPercent: 0.5,
       RevenueCompetedPercent: 0.2,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '自由行',
       Month: '2017-07-01',
       BudgetCompetedPercent: 0.5,
       RevenueCompetedPercent: 0.4,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '自由行',
       Month: '2017-08-01',
       BudgetCompetedPercent: 0.5,
       RevenueCompetedPercent: 0.4,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '自由行',
       Month: '2017-09-01',
       BudgetCompetedPercent: 0.8,
       RevenueCompetedPercent: 0.6,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '自由行',
       Month: '2017-10-01',
       BudgetCompetedPercent: 0.5,
       RevenueCompetedPercent: 0.4,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '自由行',
       Month: '2017-11-01',
       BudgetCompetedPercent: 0.5,
       RevenueCompetedPercent: 0.2,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }, {
       ProjectName: '自由行',
       Month: '2017-12-01',
       BudgetCompetedPercent: 0.9,
       RevenueCompetedPercent: 0.8,
       Budget: 1000000,
       ActualGMV: 800000,
       RevenueTarget: 500000,
       ActualCommission: 400000,
       UpdateTime: '2017-04-18' 
   }]
}


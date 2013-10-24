function main()
{
    var depth = 4;
	var width = 5;
	script = document.createElement('script');
    script.src = 'pathToFile/CountMinSketch.js';
    script.type = 'text/javascript';
	var cms = new CountMinSketch(depth, width);
	cms.initiateTables();
	cms.update(5,6);
	this.t1 = cms.pointAQA(5, 0);
	cms.update(5,4);
	this.t2 = cms.pointAQA(5, 0);
	cms.update(5,5);
	this.t3 = cms.pointAQA(5, 0);
	cms.update(6,7);
	this.t4 = cms.pointAQA(6, 0);
	cms.update(6,3);
	this.t5 = cms.pointAQA(6, 0);
	cms.update(6,5);
	this.t6 = cms.pointAQA(6, 0);
	cms.update(60,7);
	this.t7 = cms.pointAQA(60, 0);
	cms.update(60,3);
	this.t8 = cms.pointAQA(60, 0);
	cms.update(60,5);
	this.t9 = cms.pointAQA(60, 0);
	cms.update(7,8);
	cms.update(24,25);
	cms.update(25,26);

	this.t10 = cms.pointAQA(7, 0);
	this.t11 = cms.pointAQA(24, 0);
	this.t12 = cms.pointAQA(25, 0);
	this.t13 = cms.pointAQA(24, 0);
	
	this.t14 = cms.rangeAQA(5, 10);
	this.t15 = cms.rangeAQA(5, 6);
	this.t16 = cms.rangeAQA(24, 25);
	cms.update(5,4);
}
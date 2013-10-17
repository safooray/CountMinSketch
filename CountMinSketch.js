function CountMinSketch (depth, width)
{
    //4294967296  
	this.PRIME_MODULUS = Math.pow(2, 32) - 1;
	var n = 64;
//   var depth = depth;
//   var width = width;
	var dyadicIntrvals = Math.log(n) / Math.LN2;
    var table = new Array();
    var hashArray = new Array(depth);
    for (var i = 0; i < depth; i++)
    {
        hashArray[i] = Math.random() * this.PRIME_MODULUS;//Number.MAX_VALUE / n;
    }
	this.initiateTables = function ()
	{
	    for (var c = 0; c < dyadicIntrvals; c++)
		{
			table[c] = new Array();
			for (var i = 0; i < depth; i++)
	    	{
	        	table[c][i] = new Array();
				for(j = 0; j < width; j++)
	        	{	
	            	table[c][i][j] = 0;
	        	}
	    	}
		
		}
	};
    this.hash = function (item, i)
    {
        var hash = hashArray[i] * item;
        hash += hash / Math.pow(2, 25);
        //Javascript converts operands of bitwise operators to 32 bit integer. 
		hash &= this.PRIME_MODULUS;
		// >>> treats its operand as 32 bit unsigned
		hash = hash >>> 0;
        return hash % width;
    };
    this.update = function (item, count)
    {
		var originalItem = item;
        if (count < 0)
        {
            try
            {
                throw new NotImplementedError("The general turnstile case is not implemented.");
            }
            catch (ex1)
            {
                console.log(ex1.stack);
                console.log(ex1.name + " " + ex1.message);
            }
        }
        else
        {
			for(var c = 0; c < dyadicIntrvals; c++)
			{
            	item = Math.ceil(originalItem / Math.pow(2, c));
            	for (var i = 0; i < depth; i++)
            	{
                	var j = this.hash(item, i);
					table[c][i][j] += count;
            	}
			}
        }
    };
    //Approximate Query Answering Procedures
    this.pointAQA = function (item, cmsi)
    {
		var ans = Number.MAX_VALUE;
        for(var i = 0; i < depth; i++)
        {
            ans = Math.min(ans, table[cmsi][i][this.hash(item, i)]);
        }
		return ans;
    };
    this.rangeAQA = function (itemA, itemB)
    {
		if (itemA > itemB)
		{
			return 0;
		}
		if (itemA == itemB)
		{
			return this.pointAQA(itemA, 0);
		}
		//find the lowest resolution dyadic interval in the range, apply a point query to that interval, and make recursive calls for the rest of the range.
		var l = itemB - itemA + 1;
		var y;
		var y1 = Math.floor(Math.log(l)/Math.LN2);
		var y2 = y1 - 1;
		var x1 = Math.ceil((itemA - 1) / Math.pow(2, y1));
		var a = x1 * Math.pow(2, y1) + 1;
		var b = (x1 + 1) * Math.pow(2, y1);
		if (b <= itemB)
		{
			y = y1;
		}
		else
		{
			var x2 = Math.ceil((itemA - 1) / Math.pow(2, y2));
			a = x2 * Math.pow(2, y2) + 1;
			b = (x2 + 1) * Math.pow(2, y2);
			y = y2;
		}
		var item = Math.ceil(b/Math.pow(2, y));
		return this.pointAQA(item, y) + this.rangeAQA(itemA, a - 1) + this.rangeAQA(b + 1, itemB);
    };
    this.innerProductAQA = function(tableA, tableB)
    {
        var ipi = 0;
        var ip = Number.MAX_VALUE;
        for (var i = 0; i < depth; i++)
        {
            for(var k = 0; k < width; k++)
            {
                ipi += tableA[i][k] * tableB[i][k];
            }
            ip = Math.min(ip, ipi);
        }
        return ip;
    };
}
function NotImplementedError(message) {
    this.name = "NotImplementedError";
    this.message = (message || "");
}
NotImplementedError.prototype = Error.prototype;
//NotImplementedError.prototype = new Error();
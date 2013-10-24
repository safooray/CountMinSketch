CountMinSketch
==============
count-min-sketch
================
An implementation of Coromode and Muthukrishnan's Count-Min sketch (http://en.wikipedia.org/wiki/Count-Min_sketch) data structure in JavaScript.
The count-min sketch is a sublinear space data structure for summarizing data streams that gives approximate answers to point, range, and inner product queries.
For more information see the following references:

* G. Cormode, S. Muthukrishnan. "Approximating Data with the Count-Min Data Structure"(http://dimacs.rutgers.edu/~graham/pubs/papers/cmsoft.pdf).  IEEE Trans. on Software, 2012.
* A. C. Gilbert, Y. Kotidis, S. Muthukrishnan, and Martin J. Strauss. "How to summarize the universe: Dynamic maintenance of quantiles." In Proceedings of the 28th international conference on Very Large Data Bases, pp. 454-465. VLDB Endowment, 2002.


//Include library
	script = document.createElement('script');
  script.src = 'pathToFile/CountMinSketch.js';
  script.type = 'text/javascript';

//Create data structure
  var sketch = new CountMinSketch(depth, width);
  sketch.initiateTables();

//Increment counts
sketch.update(/*item*/ 5, /*count*/6);

//Queries
	sketch.pointAQA(25, 0); //Returns an estimate of the frequency of 25
  sketch.rangeAQA(5, 10); // Returns an estimate of the frequency of items between and including 5 and 10
  sketch.innerProductAQA(tableA, tableB);

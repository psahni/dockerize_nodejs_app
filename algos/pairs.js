function getPairs() {
 var arr = [1,2,3,4,5,15,16,17,19];
 var start =  0,
 end = arr.length - 1, 
 pairs = [];
 target = 18
 while( start < end ) {
	 if ( arr[start] + arr[end] == target) {
		 console.log( '(' + arr[start] + ', ' + arr[end] + ')')
		 start+=1
	 }
	 if ( arr[start] + arr[end] < target )
		 start+=1
	 else
		end-=1
 }
}

getPairs()
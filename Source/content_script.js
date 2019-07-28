// https://github.com/ClippyMSoft/cloud-to-butt/
// Special thanks to https://github.com/hank and everyone else who ever worked on Cloud-to-Butt that this is based on
walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  // Deal with the easy case
  v = v.replace(/\bICE/g, function(match, p1, p2, offset, string) {
    return "US Gestapo";
  });

	textNode.nodeValue = v;
}

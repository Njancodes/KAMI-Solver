let edgeArray = []
let nodeArray = []
let selectedHeads =  []
let state = 0;
let selectedId = 1;
let llArray = []

class List{
    constructor(node, next){
        this.node = node,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    isEmpty(){
        return this.head === null
    }
    insert(node){
        let list = new List(node, null)
        if(this.isEmpty()){
            console.log('Head Insert')
            this.head = list
        }else{
            console.log('Node Insert')
            this.insertList(this.head, list)
        }
    }
    insertList(head, list){
        if(!head.next){
            console.log("Head's Next Empty")
            head.next = list
        }else{
            console.log("Head's Next Not Empty")
            this.insertList(head.next, list)
        }
    }
    search(head, id){
        if(!head.next){
            return false
        }else{
            if(head.next.id === id){
                return true
            }else{
                return this.search(head.next, id)
            }
        }
    }
}

class Node{
    constructor(x, y, hex){
        this.radius = 20
        this.vector = createVector(x,y)
        this.hex = hex
        this.id = 0;
    }
    setHex(hex){
        this.hex = hex
    }
    setId(id){
        this.id = id
    }
    getId(){
        return this.id
    }
    getHex(){
        return this.hex
    }
    draw(){
        fill(this.getHex())
        circle(this.vector.x, this.vector.y, this.radius);
    }
    getVector(){
        return this.vector;
    }
    getRadius(){
        return this.radius;
    }
}

class Edge{
    constructor(fnode, snode){
        this.fnode = fnode;
        this.snode = snode;
    }
    getFnode(){
        return this.fnode
    }
    getSnode(){
        return this.snode
    }
    draw(){
        line(this.fnode.getVector().x, this.fnode.getVector().y, this.snode.getVector().x, this.snode.getVector().y)
    }
}







function setup(){
    let canvas = createCanvas(800,800);
    canvas.mouseClicked(mouseClickedInCanvas);
    background(100);
}

function draw(){
    background(100);
    fill(0,0,0)
    if(state === 0){
        textSize(50)
        text('n',10,40);
    }else if(state === 2){
        textSize(50)
        text('e',10,40);
    }else if(state === 1){
        textSize(50)
        text('c',10,40);
    }
    else if(state === 3){
        textSize(50)
        text('d',10,40);
    }
    edgeArray.forEach((edge)=>{
        edge.draw()
    })
    nodeArray.forEach((node)=>{
        node.draw()
    })
}

function keyPressed(){
    if(key.toLowerCase() === 'n'){
        state = 0;
    }else if(key.toLowerCase() === 'e'){
        state = 2;
    }else if(key.toLowerCase() === 'c'){
        state = 1;
    }else if(key.toLowerCase() === 'd'){
        console.log("Debug Details")
        console.log(llArray)
        console.log(`The mode is ${state}`)
        console.log(`The edges are ${edgeArray}`)
    }
    if(state === 1){
        if(Number.parseInt(key) > 0){
            selectedId = Number.parseInt(key)
        }
        console.log("The selected color is: " + selectedId)
    }else{
        selectedId = 1 //Default to the first color
    }
}

function mouseClickedInCanvas(){
    if(state === 0){
        console.log("Create Node");
        createNode(mouseX,mouseY)
    }else if(state === 2){
        console.log("Create Edge");
        selectedHeads.push(clickedNode())
        if(selectedHeads.length === 2){
            createEdge()
        }
    }else if(state === 1){
        console.log("Assign Color")
        let idToHex = new Map()
        if(document.getElementById("colorDiv").hasChildNodes){
            idToHex = getColors()
        }
        console.log(idToHex)
        console.log(selectedId)
        llArray[clickedNode()].head.node.setId(selectedId)
        llArray[clickedNode()].head.node.setHex(idToHex.get(selectedId));
    }else if(state === 3){
        console.log("Delete Nodes and Edges")
        let delIdx = clickedNode()
        nodeArray = nodeArray.filter((idx)=>{
            return (idx === delIdx)
        })
    }
}

function createEdge(){
    llArray[selectedHeads[0]].insert(llArray[selectedHeads[1]].head.node)
    llArray[selectedHeads[1]].insert(llArray[selectedHeads[0]].head.node)
    let edge = new Edge(llArray[selectedHeads[0]].head.node,llArray[selectedHeads[1]].head.node)
    edgeArray.push(edge)
    console.log(llArray)
    selectedHeads.length = 0
}

function createNode(x,y){
    let node = new Node(x, y, '#fff',null);
    nodeArray.push(node)
    let ll = new LinkedList()
    ll.insert(node)
    console.log(ll)
    llArray.push(ll);
}

function getColors(){
    let map = new Map();
    document.getElementById('colorDiv').childNodes.forEach((child, key)=>{
        if(child.hasChildNodes()){
            map.set(key/2 + 1, child.children[0].value)
        }
    })
    return map
}

function clickedNode(){
    let clickedNodeIdx = 0;
    llArray.forEach((ll, idx)=>{
        let node = ll.head.node
        let mouseVector = createVector(mouseX,mouseY);
        if(node.getVector().dist(mouseVector) <= node.getRadius()){
            clickedNodeIdx = idx;
        }
    })
    return clickedNodeIdx;
}
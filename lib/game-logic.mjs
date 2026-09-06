export function slideBoard(board, direction) {
 const next=[...board];let score=0;
 for(let line=0;line<4;line++){
  const ids=Array.from({length:4},(_,i)=>direction==='left'?line*4+i:direction==='right'?line*4+3-i:direction==='up'?i*4+line:(3-i)*4+line);
  const nums=ids.map(i=>board[i]).filter(Boolean);const merged=[];
  for(let i=0;i<nums.length;i++){if(nums[i]===nums[i+1]){merged.push(nums[i]*2);score+=nums[i]*2;i++}else merged.push(nums[i])}
  ids.forEach((id,i)=>next[id]=merged[i]||0);
 }
 return {board:next,score,changed:next.some((n,i)=>n!==board[i])};
}
export function canMove(board){return board.includes(0)||['left','right','up','down'].some(d=>slideBoard(board,d).changed)}
export function winner(board){for(const [a,b,c] of [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])if(board[a]&&board[a]===board[b]&&board[b]===board[c])return board[a];return null}
export function neighbors(id,size){const result=[];for(let y=-1;y<=1;y++)for(let x=-1;x<=1;x++){const r=Math.floor(id/size)+y,c=id%size+x;if((x||y)&&r>=0&&r<size&&c>=0&&c<size)result.push(r*size+c)}return result}
export function toggleLights(board,id){return board.map((on,i)=>i===id||Math.abs(i-id)===5||Math.floor(i/5)===Math.floor(id/5)&&Math.abs(i-id)===1?!on:on)}
export function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
export function slidePuzzle(board,id){const blank=board.indexOf(0);if(Math.abs(blank-id)===4||Math.floor(blank/4)===Math.floor(id/4)&&Math.abs(blank-id)===1){const next=[...board];[next[id],next[blank]]=[next[blank],next[id]];return next}return board}
export function makePuzzle(){let a=Array.from({length:16},(_,i)=>(i+1)%16);let last=-1;for(let i=0;i<160;i++){const blank=a.indexOf(0);const moves=Array.from({length:16},(_,j)=>j).filter(j=>j!==last&&slidePuzzle(a,j)!==a);const id=moves[Math.floor(Math.random()*moves.length)];last=blank;a=slidePuzzle(a,id)}return a}

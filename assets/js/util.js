window.util={
  toCSV:(rows)=> rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n'),
  download:(name,content,type='text/csv')=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;a.click();},
  print:()=>window.print(),
  filterTable:(tableId,q)=>{const ql=q.toLowerCase(); document.querySelectorAll(`#${tableId} tbody tr`).forEach(tr=>{tr.style.display = tr.innerText.toLowerCase().includes(ql)?'':'none';});}
};
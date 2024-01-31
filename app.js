// console.log(document)

// ab yh p mne jo lkha h console.logpe k document iska mtlb kia h iska mtlb ye h k hmne frst
// class mn prha th k document ka mtlb hta h html ki puri file t ab jb hm console pe document
// lkhnge t whn bh wo pure doc ko target krega acha yh doc ko target krne ka mtlb ye nh k doc
// pe lkha hwa console pe print krwaega blke doc k elements ko get krega target krega naake
// whn pe print kye hwe kaam ko. qk jb whn pe print ki hoi ksi cheez ko hmn get krna hta h
// t wo t hm id k through krte hn is trhn wo kaam t possible hi nh hta is trhn hm srf uske
// elements ko get krte hn. ab jb hmne kaha h k doc ko get kro t zhir h abhi yhn parent or
// child ki bt strt nh ki hmne hm bs kh rh hn k pura doc get kro t doc k jtne bh elements hn
// ye unsbko target krlga lkn jb hm kahnge k nh srf doc k child ko get kro tb wo hmn uske child
// nkl k dega or doc k child kn hn doc k child 2 hi hn wo bh doctype or html jse k:

// console.log(document.childNodes) // ab jb hmne yhn pr dkha k ye child t print krwa rh h lkn ek
// array mn t yni ye array ki trhn kaam krrh h t hm bh ispe array k methods lga skte hn:

// console.log(document.childNodes[1]) // ab iska mtlb pta h kia h iska mtlb ye h k mne usko
// kaha h k doc k child pe jao jska index 1 h or index 1 html ka h t mne yh ise ye nh kaha k
// html k child pe bh jao blke yhn mne ise just doc k child ko get krwya h or jo index 1 h uska
// mtlb ye h k ye index1 k child ko get nh krwa rh mn blke mn kh rh hn k index 1 se elements 
// dkhna shru kro t jo elements index1 k baad se hnge ye oose as it is print krwa dnge uske
// child elements nh btaenge qk logically bh yh t h k mne index1 k child ki t bt hi nh ki t phr
// ye index1 k child ko q get krga mne t doc k child ki bt ki th t usne doc k child ko get kia
// phr mne kaha k is index se dkho bs. agr mujhe index1 k bh childs ko print krwna hta t mn
// index1 lkhne k baad bh dbra childNodes lkhti . jb mn ese krngi phr index1 k childs print
// hoke aayenge. jse is trhn: 

// console.log(document.childNodes[1].childNodes) // ab yhn text ka mtlb h kachra jse hm junk
// artifacts khte hn. ye basically kch bh nh h bs elements k b/w mn jo space h oose count krke
// ye text bl rh h bs.

// console.log(document.childNodes[1].childNodes[2].childNodes)

//                    now practicing strt: 
// console.log(document.childNodes[1].childNodes[2].childNodes[1].textContent)

// let a = document.childNodes[1].childNodes[2].childNodes[1]
// console.log(a)
// console.log(a.textContent += ' hahahah')
// let b = document.childNodes
// console.log(document.childNodes[1].childNodes[0].childNodes)
// console.log(document.childNodes[1].childNodes[2].childNodes[3].childNodes)

// console.log(document.childNodes[1].childNodes[2].childNodes[3].childNodes[3].textContent)

// let a = document.getElementById('ul')
// console.log(a.childNodes[3].textContent)

// console.log(a.childNodes[3].textContent = 'Contact')

// ab hmn parent pe phnchna h:

// let b = document.getElementById('li')
// console.log(b.parentNode)
// console.log(b.parentElement)

// console.log(b.parentNode.childNodes[1].textContent += ' cart')

// console.log(a.childNodes[1].nextSibling.nextSibling)

// function changeColor() {
//     let a = document.getElementsByTagName('p') // ab yhn pe ye jo paras hn wo array mn aarh hn
    // is wjah se hm direct iska color change nh krskte blke array pe jo loop chlta h wo chla
    // k then uska color change krskte hn
    // for(let i = 0; i < a.length; i++) {
        // a[i].style.backgroundColor = 'black';
        // a[i].style.color = 'white';
        // a[i].className = 'abc'
//     }
// }
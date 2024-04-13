import styled from "styled-components";
import {useState} from "react";
import initialFriends from "../../data/eatAndSplit.js";
import Button from "../../ui/Button.jsx";

const ContainerFriends = styled.div`
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 0.4rem;
   font-size: 1.4rem;
   margin-bottom: 2rem;
width: 42rem;
`;
const FormAddFriend = styled.form`
   font-size: 1.6rem;
   color: #1f2937;
   display: grid;
   align-items: center;
   gap: 1.2rem;

   background-color: var(--color-grey-200);
   border-radius: 7px;
   grid-template-columns: 0.6fr 1.5fr;
   margin-bottom: 1.6rem;
   padding: 1.2rem;
`;

function SidebarFriends() {
  const [friends, setFriends] = useState(initialFriends);
  const randomId = Math.round(Math.random() * 1000000);
  const [friend, setFriend] = useState({
    id: 123456, name: '', image: '', balance: 0,
  });
  const [show, setShow] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setFriends(friends =>
      [...friends,
        {
          ...friend,
          image: `https://i.pravatar.cc/48?u=${friend.image}`,
          id: randomId,
        }]
    )
  }

  function onChange(e) {
    e.preventDefault();
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <ContainerFriends>
        {friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
        <Button onClick={() => setShow(show => !show)}>Add friend</Button>
        {show && <FormAddFriend onSubmit={handleSubmit}>
          <div>Image</div>
          <input type='text' name='image' className='px-4 py-2 rounded-2xl'
                 placeholder='https://i.pravatar.cc/48?u='
                 onChange={onChange}/>
          <div>Name</div>
          <input type='text' name='name' className='px-4 py-2 rounded-2xl'
                 onChange={onChange}/>
          <Button>ADD</Button>
        </FormAddFriend>}
      </ContainerFriends>
    </>
  )
}

const SidebarFr = styled.div`
   display: grid;
   grid-template-columns: 4.8rem 1fr auto;
   align-items: center;
   column-gap: 1.6rem;

   padding: 1.2rem;
   border-radius: 7px;
   transition: 0.5s;

   &::selection {
      background-color: #fff4e6;
   }
`;
const Img = styled.img`
   border-radius: 50%;
   width: 100%;
   grid-row: span 2;
`;

function Friend({friend}) {
  const {id, name, image, balance} = friend;
  return (
    <SidebarFr>
      <Img src={image} alt='id'/>
      <div>
        <div>{name}</div>
        <div>{balance < 0
          ? `You owe ${name} $${Math.abs(balance)}`
          : balance > 0
            ? `${name} owes you $${balance}`
            : `You and ${name} are even`
        }
        </div>
      </div>
      <Button>Select</Button>

    </SidebarFr>
  )
}
export default SidebarFriends;
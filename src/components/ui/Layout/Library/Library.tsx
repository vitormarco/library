'use client';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { v4 as uuidV4 } from 'uuid';
import Button from '@/components/shared/Button';
import Drawer from '@/components/shared/Drawer';
import { Input } from '@/components/shared/Input';
import Pagination from '@/components/shared/Pagination';
import VisuallyHidden from '@/components/shared/VisuallyHidden';
import BookList from '@/components/ui/BookList';
import { useDebounce } from '@/hooks/useDebounce';
import useModal from '@/hooks/useModal';
import { useCreateBookMutation, useGetBooksQuery } from '@/services/books/books';
import styles from './Library.module.css';

const Library = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const searchQuery = useDebounce(search, 500);
  const { data, isLoading, isFetching, isError } = useGetBooksQuery({
    page,
    name: searchQuery
  });
  const [createBook] = useCreateBookMutation();
  const { isOpen, handleClose, handleOpen } = useModal();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  };

  return (
    <>
      <section className={styles.library}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Input
              labelText="Buscar livro por titulo"
              visuallyHidden
              value={search}
              onChange={handleSearch}
              placeholder="Buscar livro por titulo"
            />
            <Button
              onClick={() => {
                handleOpen();
              }}
            >
              <VisuallyHidden>Addicionar livro</VisuallyHidden>
              <span>
                <FiPlus />
              </span>
            </Button>
          </header>
          <BookList
            books={data?.results}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
          />
        </div>
        <Pagination
          onChange={(page) => setPage(page)}
          totalCountRegisters={data?.total || 0}
          currentPage={page}
        />
      </section>

      <Drawer isOpen={isOpen} onClose={handleClose}>
        <Button
          onClick={() => {
            createBook({
              id: uuidV4(),
              title: 'Fight Club',
              description:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique dui ac odio consequat, quis interdum felis imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vitae ipsum viverra, lacinia diam non, imperdiet nisi. Praesent ac libero orci. Pellentesque enim ligula, finibus sed pretium non, rutrum ac neque. Sed eu lacus ipsum. Pellentesque sodales at justo id finibus. Phasellus pulvinar, justo efficitur gravida molestie, lectus felis aliquet dolor, non venenatis nibh metus non nisl. Phasellus ut libero tristique, ornare lorem sit amet, luctus diam. Morbi varius varius odio ac vulputate.</p><p>Integer ante libero, sagittis a rutrum in, maximus nec justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ut consectetur lectus, ut interdum elit. Integer aliquam magna nulla, ut bibendum nibh mollis nec. Duis sapien ipsum, luctus non nunc non, dictum sollicitudin urna. Sed aliquet mauris et lectus accumsan, vel congue elit imperdiet. Maecenas ornare convallis auctor. In hac habitasse platea dictumst. Ut suscipit a odio id auctor. Vivamus fringilla dignissim mauris vel tincidunt. Praesent id viverra diam.</p><p>Donec sed mollis ligula. Etiam bibendum augue vitae commodo commodo. Fusce nec lobortis enim, ut elementum velit. Integer sagittis ornare commodo. Duis lobortis eu lorem non molestie. Mauris et dui sed ante pretium aliquet eget vel lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc massa mi, sollicitudin eu auctor vel, eleifend a arcu. Nam elementum ante id nibh ullamcorper malesuada. Praesent eros dolor, tempor non ante quis, mattis faucibus arcu. Duis sit amet tellus ligula. Duis porttitor egestas nunc, sit amet accumsan nisl finibus at. Pellentesque vulputate sapien at faucibus tristique.</p><p>Pellentesque nibh ante, vestibulum vitae dui vel, dictum tristique tortor. Mauris quis augue bibendum, rhoncus tortor at, varius libero. Suspendisse ac viverra nisl. Integer iaculis consectetur ante, sed porttitor justo egestas ac. Ut lorem dolor, finibus eu nisi posuere, viverra condimentum sem. Nullam sodales commodo dictum. Cras et interdum justo. Sed pulvinar lobortis justo in hendrerit. Nunc dolor magna, blandit vitae ipsum et, mattis laoreet turpis. Nam hendrerit neque ut purus commodo, et convallis enim faucibus. Nullam at ultrices justo. Vivamus nec ligula eleifend, pulvinar arcu eu, gravida tellus. Ut vehicula dictum ornare. Maecenas luctus nisi ac congue rhoncus.</p><p>Curabitur id ligula molestie, venenatis dui quis, feugiat orci. Cras aliquet et metus eu congue. Nulla et enim id metus vulputate dictum. Nullam porta nibh non eleifend faucibus. Curabitur eu commodo ex. Vivamus aliquam at orci vitae maximus. Curabitur pharetra augue et lectus maximus rutrum. Vivamus vel dolor interdum, congue odio volutpat, aliquet justo. Sed vel eros velit. Nunc iaculis tincidunt urna a eleifend. Proin commodo, odio quis congue volutpat, velit ante finibus lacus, vitae accumsan arcu diam vitae metus.</p><p>Aenean ac arcu in libero viverra dignissim quis placerat mi. Nam non nulla orci. Ut condimentum magna leo, non accumsan sem tempor id. Curabitur scelerisque ante a tellus luctus, in accumsan augue rutrum. Aliquam arcu eros, euismod a mollis euismod, euismod a mauris. In blandit felis vitae mi maximus consequat. Sed fringilla a lacus eget consequat. Mauris at orci orci. Integer ullamcorper lacus vel dui placerat, non consequat sem commodo.</p><p>Quisque hendrerit libero quis feugiat efficitur. Quisque tempus aliquet odio, at lobortis dolor ullamcorper venenatis. In elementum neque convallis, dapibus sapien nec, eleifend sapien. Donec non convallis massa, id rutrum lorem. Nunc elit odio, vestibulum in tortor sed, rhoncus finibus metus. Nam in felis dolor. In facilisis, ante eu rhoncus lobortis, urna dolor fermentum velit, at scelerisque dolor justo in tortor.</p><p>Vestibulum quis arcu purus. Vivamus nec leo ultricies, volutpat ligula non, euismod ex. Proin rhoncus metus eu mauris tristique, sit amet ultrices velit varius. In scelerisque, ex molestie feugiat dapibus, lorem est posuere quam, eu imperdiet massa dui in neque. Praesent ac fringilla diam, nec facilisis diam. Morbi volutpat nec nisi sed suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc aliquet hendrerit quam, nec mollis nisi dapibus quis. Pellentesque vestibulum lacus sed tortor dictum, viverra finibus est sagittis. Mauris tempus, est quis efficitur eleifend, massa nunc pharetra nunc, sit amet mollis libero lectus vel mauris. Aliquam tristique sollicitudin ipsum in egestas. In non dolor euismod nulla eleifend porta.</p><p>Sed varius justo eros, quis consectetur orci aliquam nec. Nunc posuere rhoncus quam, suscipit laoreet tortor imperdiet quis. Vivamus tincidunt laoreet accumsan. Morbi vel porta felis, in ornare metus. Suspendisse eu nisi sit amet lectus volutpat fermentum ac eu lectus. Ut et ante risus. Mauris luctus metus augue, eget mattis enim venenatis sit</p>',
              isAvailable: true,
              created_at: new Date()
            });
            handleClose();
            setPage(1);
          }}
        >
          Create Book
        </Button>
      </Drawer>
    </>
  );
};

export default Library;

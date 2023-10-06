import ThanhHeader from "./Header";
import ThanhFooter from './components/Footer';
import ThanhBody from './components/Body';
import LoaiSanPham from './components/loai_san_pham';
function TrangChu(props)
{
    const dsLoaiSanPham = [
        {
          'ten': 'Danh mục 1',
          'ds_san_pham':[
            {
              
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 1',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 2',
            },
            
            {
              
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 3',
            },
            {
              
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 4',
            },
            {
              
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 5',
            },
          ]
        },
        {
          'ten': 'Danh Mục 2',
          'ds_san_pham':[
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 5',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 6',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 7',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 8',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 9',
            },
          ]
        },
        {
          'ten': 'Danh Mục 3',
          'ds_san_pham':[
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 5',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 6',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 7',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 8',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 9',
            },
          ]
        },
        {
          'ten': 'Danh Mục 3',
          'ds_san_pham':[
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 5',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 6',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 7',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 8',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 9',
            },
          ]
        },
        {
          'ten': 'Danh Mục 3',
          'ds_san_pham':[
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 5',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 6',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 7',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 8',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 9',
            },
          ]
        },
        {
          'ten': 'Danh Mục 3',
          'ds_san_pham':[
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 5',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 6',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 7',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 8',
            },
            {
              'hinh_anh': 'img/R.png',
              'ten': 'Bài Viết 9',
            },
          ]
        },
      ];
    
      const listLoaiSanPhams = dsLoaiSanPham.map(function(item){
        return (
          <LoaiSanPham data={item}/>
        );
      });
      return (
        <><ThanhHeader/>
        <ThanhBody/>
        {listLoaiSanPhams}
        <ThanhFooter/>
        </>
      
        
      );
}
export default TrangChu
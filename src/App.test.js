import { render, screen } from '@testing-library/react';
import App from './App';
import SelectedMovie from './components/SelectedMovie'
import HomePage from './components/HomePage'

test('renders StarWar Movies', () => {
  render(<App />);
  const linkElement = screen.getByText(/starwarmovie/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/movies/i);
  expect(linkElement2).toBeInTheDocument();
  
});

test('renders Selected Movie default page', () => {
  
  render(<SelectedMovie  movies={[{title:'A New Hope'},{title:'The Empire Strikes Back'}]} />);
  
  const Sorting = screen.getByText(/No movie selected/i);
  expect(Sorting).toBeInTheDocument();
});
test('test case for showing selected movie', () => {
 
  render(<SelectedMovie  movies={[{title:'A New Hope'},{title:'The Empire Strikes Back'}]}  selectedMovie='A New Hope'/>);
  
  const movie1 = screen.getByText(/A New Hope/i);
  expect(movie1).toBeInTheDocument();
  const movie2 = screen.getByText(/Directed By/i);
  expect(movie2).toBeInTheDocument();
});

test('test for displayed image ', () => {
 
  render(<HomePage/>);
  const logo = screen.getByAltText('starwar1');
  expect(logo).toBeInTheDocument();
 
  
});


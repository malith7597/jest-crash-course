import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
    it('should render a product image gallery', () => {
        // Arrange
        const imageUrls: string[] = ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'];
        // Act
        render(<ProductImageGallery imageUrls={imageUrls} />);
        const images= screen.getAllByRole('img')
        // Assert
        expect(images).toHaveLength(2);
        imageUrls.forEach((url, index) => {
        expect(images[index]).toHaveAttribute('src', url);
        });
        
    });
    
    it('should not render a product image gallery when imageUrl array is empty' , () => {
        // Arrange
        const imageUrls: string[] = [];
        // Act
       const {container }= render(<ProductImageGallery imageUrls={imageUrls} />);
        expect(container).toBeEmptyDOMElement();
        });
        
    })

import React from 'react';

interface PDFViewerProps {
    src: string;
    title?: string;
    height?: string;
    showDownload?: boolean;
    showOpenInNew?: boolean;
}

export default function PDFViewer({
    src,
    title = "PDF Document",
    height = "600px",
    showDownload = true,
    showOpenInNew = true
}: PDFViewerProps) {
    return (
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            {(showDownload || showOpenInNew) && (
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {showDownload && (
                        <a
                            href={src}
                            download
                            style={{
                                backgroundColor: 'var(--ifm-color-primary)',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                fontWeight: 'bold',
                                transition: 'opacity 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            📥 Scarica PDF
                        </a>
                    )}
                    {showOpenInNew && (
                        <a
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: '#1877F2',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                fontWeight: 'bold',
                                transition: 'opacity 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            🔗 Apri in nuova finestra
                        </a>
                    )}
                </div>
            )}

            <iframe
                src={src}
                width="100%"
                height={height}
                style={{
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    borderRadius: '4px',
                    display: 'block'
                }}
                title={title}
            />
        </div>
    );
}
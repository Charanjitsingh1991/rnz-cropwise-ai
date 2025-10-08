import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../widgets/custom_button.dart';
import '../../services/api_service.dart';

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';

class BrochureViewerScreen extends StatefulWidget {
  final String title;
  final String url;
  final String? brochureId;

  const BrochureViewerScreen({
    super.key,
    required this.title,
    required this.url,
    this.brochureId,
  });

  @override
  State<BrochureViewerScreen> createState() => _BrochureViewerScreenState();
}

class _BrochureViewerScreenState extends State<BrochureViewerScreen> {
  bool _isLoading = true;
  bool _hasError = false;
  late PdfViewerController _pdfViewerController;

  @override
  void initState() {
    super.initState();
    _pdfViewerController = PdfViewerController();
    
    // For web, automatically open the PDF in a new tab
    if (kIsWeb) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        _openInExternalBrowser();
      });
    }
  }

  Future<void> _openInExternalBrowser() async {
    final Uri url = Uri.parse(widget.url);
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    if (await canLaunchUrl(url)) {
      await launchUrl(url, mode: LaunchMode.externalApplication);
    } else {
      scaffoldMessenger.showSnackBar(
        const SnackBar(
          content: Text('Could not open brochure in external browser'),
          backgroundColor: Colors.red,
        ),
      );
    }
  }

  Future<void> _downloadBrochure() async {
    final Uri url = Uri.parse(widget.url);
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    
    try {
      // Track download if brochureId is provided
      if (widget.brochureId != null) {
        await ApiService().trackBrochureDownload(widget.brochureId!);
      }
      
      if (await canLaunchUrl(url)) {
        await launchUrl(url, mode: LaunchMode.externalApplication);
        scaffoldMessenger.showSnackBar(
          const SnackBar(
            content: Text('Opening download in browser...'),
            backgroundColor: Colors.green,
          ),
        );
      } else {
        scaffoldMessenger.showSnackBar(
          const SnackBar(
            content: Text('Could not download brochure'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } catch (error) {
      debugPrint('Error tracking brochure download: $error');
      // Still try to download even if tracking fails
      if (await canLaunchUrl(url)) {
        await launchUrl(url, mode: LaunchMode.externalApplication);
        scaffoldMessenger.showSnackBar(
          const SnackBar(
            content: Text('Opening download in browser...'),
            backgroundColor: Colors.green,
          ),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    // For web, show simple interface that opens in browser
    if (kIsWeb) {
      return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
          backgroundColor: Colors.green[600],
          foregroundColor: Colors.white,
          actions: [
            IconButton(
              icon: const Icon(Icons.open_in_browser),
              onPressed: _openInExternalBrowser,
              tooltip: 'Open in Browser',
            ),
            IconButton(
              icon: const Icon(Icons.download),
              onPressed: _downloadBrochure,
              tooltip: 'Download',
            ),
          ],
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.picture_as_pdf,
                size: 128,
                color: Colors.red[400],
              ),
              const SizedBox(height: 24),
              Text(
                widget.title,
                style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 16),
              Text(
                'Opening brochure in new tab...',
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  color: Colors.grey[600],
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 32),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  CustomButton(
                    text: 'Open in Browser',
                    onPressed: _openInExternalBrowser,
                    backgroundColor: Colors.green[600],
                    textColor: Colors.white,
                  ),
                  const SizedBox(width: 12),
                  CustomButton(
                    text: 'Download',
                    onPressed: _downloadBrochure,
                    isOutlined: true,
                    textColor: Colors.green[600],
                  ),
                ],
              ),
            ],
          ),
        ),
      );
    }

    // For mobile, show in-app PDF viewer
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.zoom_in),
            onPressed: () => _pdfViewerController.zoomLevel = 1.25,
            tooltip: 'Zoom In',
          ),
          IconButton(
            icon: const Icon(Icons.zoom_out),
            onPressed: () => _pdfViewerController.zoomLevel = 0.8,
            tooltip: 'Zoom Out',
          ),
          IconButton(
            icon: const Icon(Icons.open_in_browser),
            onPressed: _openInExternalBrowser,
            tooltip: 'Open in Browser',
          ),
          IconButton(
            icon: const Icon(Icons.download),
            onPressed: _downloadBrochure,
            tooltip: 'Download',
          ),
        ],
      ),
      body: Stack(
        children: [
          // In-app PDF Viewer
          SfPdfViewer.network(
            widget.url,
            controller: _pdfViewerController,
            onDocumentLoaded: (PdfDocumentLoadedDetails details) {
              setState(() {
                _isLoading = false;
              });
            },
            onDocumentLoadFailed: (PdfDocumentLoadFailedDetails details) {
              setState(() {
                _isLoading = false;
                _hasError = true;
              });
            },
          ),
          
          // Loading Indicator
          if (_isLoading)
            Container(
              color: Colors.white,
              child: const Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    CircularProgressIndicator(
                      valueColor: AlwaysStoppedAnimation<Color>(Colors.green),
                    ),
                    SizedBox(height: 16),
                    Text('Loading brochure...'),
                  ],
                ),
              ),
            ),
          
          // Error State
          if (_hasError)
            Container(
              color: Colors.white,
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      Icons.error_outline,
                      size: 64,
                      color: Colors.red[300],
                    ),
                    const SizedBox(height: 16),
                    Text(
                      'Failed to load brochure',
                      style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                        color: Colors.red[700],
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'The brochure could not be loaded. Please try again or open in browser.',
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: Colors.grey[600],
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 24),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        CustomButton(
                          text: 'Retry',
                          onPressed: () {
                            setState(() {
                              _hasError = false;
                              _isLoading = true;
                            });
                          },
                          backgroundColor: Colors.green[600],
                          textColor: Colors.white,
                        ),
                        const SizedBox(width: 12),
                        CustomButton(
                          text: 'Open in Browser',
                          onPressed: _openInExternalBrowser,
                          isOutlined: true,
                          textColor: Colors.green[600],
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}

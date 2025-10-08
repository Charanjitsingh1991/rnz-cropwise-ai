import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../utils/constants.dart';

class PinInputDialog extends StatefulWidget {
  final String title;
  final String message;
  final bool isSetup; // true for setup, false for verification

  const PinInputDialog({
    super.key,
    required this.title,
    required this.message,
    this.isSetup = false,
  });

  @override
  State<PinInputDialog> createState() => _PinInputDialogState();
}

class _PinInputDialogState extends State<PinInputDialog> {
  final List<String> _pin = [];
  final List<String> _confirmPin = [];
  bool _isConfirming = false;
  bool _isError = false;
  String _errorMessage = '';

  @override
  Widget build(BuildContext context) {
    return Dialog(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: Container(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.lock_outline,
              size: 48,
              color: AppColors.primary,
            ),
            const SizedBox(height: 16),
            Text(
              widget.title,
              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              widget.message,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            _buildPinDisplay(),
            const SizedBox(height: 24),
            _buildPinPad(),
            const SizedBox(height: 16),
            if (_isError)
              Text(
                _errorMessage,
                style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color: AppColors.error,
                ),
                textAlign: TextAlign.center,
              ),
            const SizedBox(height: 16),
            if (!widget.isSetup)
              TextButton(
                onPressed: () => Navigator.pop(context, 'cancel'),
                child: const Text('Cancel'),
              ),
          ],
        ),
      ),
    );
  }

  Widget _buildPinDisplay() {
    final currentPin = _isConfirming ? _confirmPin : _pin;
    final maxLength = 4;

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: List.generate(maxLength, (index) {
        final isFilled = index < currentPin.length;
        return Container(
          width: 20,
          height: 20,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: isFilled ? AppColors.primary : Colors.grey.shade300,
          ),
        );
      }),
    );
  }

  Widget _buildPinPad() {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildPinButton('1'),
            _buildPinButton('2'),
            _buildPinButton('3'),
          ],
        ),
        const SizedBox(height: 16),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildPinButton('4'),
            _buildPinButton('5'),
            _buildPinButton('6'),
          ],
        ),
        const SizedBox(height: 16),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildPinButton('7'),
            _buildPinButton('8'),
            _buildPinButton('9'),
          ],
        ),
        const SizedBox(height: 16),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            const SizedBox(width: 60), // Empty space
            _buildPinButton('0'),
            _buildPinButton('delete', isDelete: true),
          ],
        ),
      ],
    );
  }

  Widget _buildPinButton(String digit, {bool isDelete = false}) {
    return GestureDetector(
      onTap: () => _onPinButtonPressed(digit, isDelete),
      child: Container(
        width: 60,
        height: 60,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: isDelete ? Colors.grey.shade200 : AppColors.primary.withValues(alpha: 0.1),
          border: Border.all(
            color: isDelete ? Colors.grey.shade400 : AppColors.primary,
            width: 1,
          ),
        ),
        child: Center(
          child: isDelete
              ? Icon(
                  Icons.backspace_outlined,
                  color: Colors.grey.shade600,
                  size: 24,
                )
              : Text(
                  digit,
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    color: AppColors.primary,
                  ),
                ),
        ),
      ),
    );
  }

  void _onPinButtonPressed(String digit, bool isDelete) {
    setState(() {
      _isError = false;
      _errorMessage = '';

      if (isDelete) {
        if (_isConfirming) {
          if (_confirmPin.isNotEmpty) {
            _confirmPin.removeLast();
          }
        } else {
          if (_pin.isNotEmpty) {
            _pin.removeLast();
          }
        }
      } else {
        if (_isConfirming) {
          if (_confirmPin.length < 4) {
            _confirmPin.add(digit);
            if (_confirmPin.length == 4) {
              _verifyPin();
            }
          }
        } else {
          if (_pin.length < 4) {
            _pin.add(digit);
            if (_pin.length == 4) {
              if (widget.isSetup) {
                _startConfirmPin();
              } else {
                _verifyPin();
              }
            }
          }
        }
      }
    });
  }

  void _startConfirmPin() {
    setState(() {
      _isConfirming = true;
    });
  }

  void _verifyPin() {
    if (widget.isSetup) {
      // Setup mode - verify both pins match
      if (_pin.join() == _confirmPin.join()) {
        Navigator.pop(context, _pin.join());
      } else {
        setState(() {
          _isError = true;
          _errorMessage = 'PINs do not match. Please try again.';
          _confirmPin.clear();
        });
      }
    } else {
      // Verification mode - return the PIN
      Navigator.pop(context, _pin.join());
    }
  }
}

